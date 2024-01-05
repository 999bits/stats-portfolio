"use client"
import { AreaChart, Area, CartesianGrid, YAxis, Tooltip } from "recharts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface PortfolioChartProps {
    width: number;
    height: number;
}

export const PortfolioChart: React.FC<PortfolioChartProps> = ({ width, height }: PortfolioChartProps) => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='flex flex-col w-full h-full justify-between'>
            <div className='flex justify-center'>
                <AreaChart width={width} height={height} data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.4} />
                            <stop offset="76%" stopColor="#009737" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <YAxis className='text-[10px]' />
                    <CartesianGrid strokeWidth={0.2} strokeLinecap='butt' strokeDasharray="3 3" vertical={false} />
                    <Area type="monotone" dataKey="uv" stroke="#009737" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
            <div className='flex justify-end'>
                <ToggleGroup className='space-x-2' type='single'>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='1d'>1D</ToggleGroupItem>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='1w'>1W</ToggleGroupItem>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='1m'>1M</ToggleGroupItem>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='3m'>3M</ToggleGroupItem>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='1y'>1Y</ToggleGroupItem>
                    <ToggleGroupItem className='w-8 h-8 hover:bg-neutral-800 hover:text-white text-[12px]' value='all'>ALL</ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
    )
}

export default PortfolioChart;