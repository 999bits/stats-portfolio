"use client"

import { useEffect, useState } from "react";
import { AreaChart, Area } from "recharts";

interface WalletChartProps {
    data: any;
    increaseColor: string;
    decreaseColor: string;
    curveOnly: boolean;
    index: number;
}

export const WalletChart: React.FC<WalletChartProps> = ({ data, increaseColor, decreaseColor, curveOnly, index }: WalletChartProps) => {

    const [chartColor, setChartColor] = useState<string>('');

    useEffect(() => {
        if (data && data.length > 1) {
            if (data[0].amt < data[data.length - 1].amt) {
                setChartColor(increaseColor);
            } else {
                setChartColor(decreaseColor);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <>
            {chartColor.length > 0 && (
                <AreaChart width={113} height={50} data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    {!curveOnly && (<defs>
                        <linearGradient id={`colorPv` + index} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                        </linearGradient>
                    </defs>)}
                    <Area type="monotone" dataKey="amt" stroke={chartColor} fillOpacity={1} fill={`url(#colorPv` + index + `)`} />
                </AreaChart>
            )}
        </>
    )
}

export default WalletChart;