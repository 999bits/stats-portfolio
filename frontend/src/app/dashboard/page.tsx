"use client"
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PortfolioStats } from "@/components/dashboard";
import { PortfolioChart } from "@/components/dashboard";
import TokenAllocation from "@/components/dashboard/token/allocation/token-allocation";
import WalletBoard from "@/components/dashboard/wallet/wallet-board";
import TokenList from "@/components/dashboard/token/list/token-list";
import NftBoard from "@/components/dashboard/nft-transaction/nft-transaction-board";
import { dummy_tokens, dummy_portfolios } from "@/config";

export default function Dashboard() {

    const [tokenAssets, setTokenAssets] = useState<any>(dummy_tokens);

    return (
        <ScrollArea className="flex w-full h-full overflow-y-auto pl-4 pt-4 pb-4">
            <div className='flex w-full h-full justify-center'>
                <div className='w-[900px] space-y-6'>
                    <div className='flex flex-row justify-between'>
                        <div className="w-[500px] h-[200px]">
                            <PortfolioStats />
                        </div>
                        <div className='w-[436px] h-[200px]'>
                            <PortfolioChart data={dummy_portfolios} width={436} height={144} />
                        </div>
                    </div>
                    <WalletBoard />
                    <div className='flex flex-row justify-between'>
                        <div className='w-[334px] h-[432px]'>
                            <TokenAllocation tokenAssets={tokenAssets}></TokenAllocation>
                        </div>
                        <div className='w-[545px] h-[568px]'>
                            <TokenList tokenAssets={tokenAssets}></TokenList>
                        </div>
                    </div>
                    <NftBoard></NftBoard>
                </div>
            </div>
        </ScrollArea>
    )
}
