/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    // d3
    import Selection = d3.Selection;

    export module pulseChartUtils {
        export const DimmedOpacity: number = 0.5;
        export const DefaultOpacity: number = 1.0;

        export function getFillOpacity(selected: boolean, highlight: boolean, hasSelection: boolean, hasPartialHighlights: boolean): number {
            if ((hasPartialHighlights && !highlight) || (hasSelection && !selected)) {
                return DimmedOpacity;
            }
            return DefaultOpacity;
        }

        export function AddOnTouchClick(selection: Selection<any>, callback: (data: any, index: number) => any): Selection<any> {
            let preventDefaultCallback = (data: any, index: number): void => {
                (d3.event as MouseEvent).preventDefault();
                (d3.event as MouseEvent).stopPropagation();
                callback(data, index);
            };
            return selection
                .on("click", preventDefaultCallback)
                .on("touchstart", preventDefaultCallback);
        }
    }

    export module PulseChartDataLabelUtils {
        export function getDefaultPulseChartLabelSettings(): ChartDataLabelsSettings {
            return {
                show: false,
                position: 1, /* PointLabelPosition.Above, */
                displayUnits: 0,
                precision: undefined,
                labelColor: "#777777",
                fontSize: 9,
                labelDensity: "50",
            };
        }
    }
}
