"use client"

import { Transaction } from "@/interface";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { shortenAddress } from "@/lib/blockchain/utils";

interface TransactionListItemProps {
    data: Transaction
}

export const TransactionListItem: React.FC<TransactionListItemProps> = ({ data }: TransactionListItemProps) => {

    return (
        <div className='flex flex-row w-full h-full p-4 justify-between items-center space-x-3 hover:bg-zinc-800'>
            <div className='flex flex-1 flex-row text-neutral-400 text-sm space-x-3'>
                <div className='p-1 bg-zinc-900 rounded-sm'>
                    {data.type === 0 ? <FiArrowDownLeft /> : <FiArrowUpRight />}
                </div>
                <span>
                    {data.type === 0 ? 'Deposit' : 'Withdraw'}
                </span>
            </div>
            <span className='flex-1 text-sm text-neutral-300'>{data.amount} {data.name}</span>
            <span className='flex-1 text-sm text-green-200'>${data.usd_value}</span>
            <span className='flex-1 text-sm text-neutral-500'>{data.created}</span>
            <span className='flex-1 text-sm text-right text-neutral-300'>{shortenAddress(data.address)}</span>
        </div>
    )
}

export default TransactionListItem;