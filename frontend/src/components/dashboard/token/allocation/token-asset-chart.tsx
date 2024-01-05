"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TokenAssetChartProps {
    assets: number[];
    labels: string[];
    colors: string[];
    width: number;
    height: number;
}

interface CustomFunctionParams {
    series: number[];
    seriesIndex: number;
    dataPointIndex: number;
    w: any;
}

export const TokenAssetChart: React.FC<TokenAssetChartProps> = ({ assets, labels, colors, width, height }: TokenAssetChartProps) => {

    const INIT_OPTIONS = {
        colors: colors,
        labels: labels,
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }: CustomFunctionParams) {
                const backgroundColor = colors[seriesIndex];
                const paddingValue = '10px';
                return '<div style="background-color: ' + backgroundColor + '; padding: ' + paddingValue + '"><span>' + labels[seriesIndex] + '~' + series[seriesIndex] + '%</span></div>'
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: '75%'
                }
            }
        },
        chart: {
            type: 'donut',
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'straight',
            colors: ['#171717', '#171717', '#171717', '#171717', '#171717'],
            width: 5
        },
        fill: {
            opacity: 1,
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'darken',
                    value: 1,
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'darken',
                    value: 1,
                }
            },
        }
    };

    const [options, setOptions] = useState<any>(INIT_OPTIONS);

    return (
        < ReactApexChart options={options} series={assets} type="donut" width={width} height={height} />
    )
}

export default TokenAssetChart;