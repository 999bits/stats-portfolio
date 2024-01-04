"use client"
import { Badge } from "@/components/ui/badge";
import { IoChevronUpSharp } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";

export const PortfolioStats: React.FC = () => {
    return (
        <div className='flex flex-col w-[364px] h-[201px] gap-y-[15px]'>
            <span className='text-neutral-500 text-base font-medium'>Portfolio Value</span>
            <span className='text-neutral-50 text-[40px] font-bold'>$178,286.01</span>
            <div className='flex flex-row items-center gap-[12px]'>
                <Badge className='h-8 bg-green-500/10 hover:bg-green-500/10 text-green-500 text-sm'><IoChevronUpSharp /><span className="ml-2">+2.73%</span></Badge>
                <span className='text-neutral-300 text-base font-bold'>+$39,204</span>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center space-x-2'>
                    <span className='text-sm text-neutral-600'>Net Flow</span>
                    <LuInfo className='text-neutral-600' />
                    <span className='text-base text-green-300'>+$22,204</span>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <span className='text-sm text-neutral-600'>Realized PNL</span>
                    <LuInfo className='text-neutral-600' />
                    <span className='text-base text-green-300'>+$18.09</span>
                </div>
            </div>
        </div>
    )
}

export default PortfolioStats;