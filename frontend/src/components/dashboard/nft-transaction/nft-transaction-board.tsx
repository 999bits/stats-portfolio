"use client"
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import NftList from "./nft/nft-list";
import TransactionList from "./transaction/transaction-list";

export const NftBoard: React.FC = () => {

    return (
        <Tabs defaultValue='nft' className='w-full'>
            <TabsList className='flex w-[230px] h-[33px] bg-transparent'>
                <TabsTrigger className='w-[70px] data-[state=active]:bg-transparent data-[state=active]:border-b-[1px] border-cyan-200 !rounded-none text-neutral-300 text-sm' value="nft">NFTs</TabsTrigger>
                <TabsTrigger className='w-[160px] data-[state=active]:bg-transparent data-[state=active]:border-b-[1px] border-cyan-200 !rounded-none text-neutral-300 text-sm' value="transactions">Transactions</TabsTrigger>
            </TabsList>
            <Separator className='' />
            <TabsContent className='w-full h-[290px]' value="nft">
                <NftList />
            </TabsContent>
            <TabsContent className='w-full h-[290px]' value="transactions">
                <TransactionList />
            </TabsContent>
        </Tabs>
    )
}

export default NftBoard;