"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { TransactionListItem } from "./transaction-list-item"
import { Transaction } from "@/interface";
import { dummy_transactions } from "@/config";


export const TransactionList: React.FC = () => {


    return (
        <ScrollArea className='w-full h-full'>
            <div>
                {
                    dummy_transactions.map((transaction: Transaction, index) => (
                        <div className='flex flex-col h-14' key={index}>
                            <TransactionListItem data={transaction} />
                            <Separator className='bg-neutral-800' />
                        </div>
                    ))
                }
            </div>
        </ScrollArea>
    )
}

export default TransactionList;