"use client"
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PortfolioStats } from "@/components/dashboard";
import { PortfolioChart } from "@/components/dashboard";
import TokenAllocation from "@/components/dashboard/token/allocation/token-allocation";
import WalletBoard from "@/components/dashboard/wallet/wallet-board";
import TokenList from "@/components/dashboard/token/list/token-list";

export default function Dashboard() {
    const DUMMY_TOKENS = [
        {
            name: 'USDC',
            full_name: 'USD Coin',
            avatar: '/images/dashboard/tokens/usdc.svg',
            percent: 48,
            value: 36090,
            usd_value: 36090
        },
        {
            name: 'ETH',
            full_name: 'Ethereum',
            avatar: '/images/dashboard/tokens/ethereum.svg',
            percent: 23,
            value: 32,
            usd_value: 63115.94
        },
        {
            name: '1inch',
            full_name: '1inch',
            avatar: '/images/dashboard/tokens/1inch.svg',
            percent: 25,
            value: 16000,
            usd_value: 16000
        },
        {
            name: 'Shiba',
            full_name: 'Shiba',
            avatar: '/images/dashboard/tokens/shiba.svg',
            percent: 13,
            value: 258756,
            usd_value: 3570
        },
        {
            name: 'USDT',
            full_name: 'USD coin',
            avatar: '/images/dashboard/tokens/usdt.svg',
            percent: 5,
            value: 1350,
            usd_value: 1350
        }
    ];

    const [tokenAssets, setTokenAssets] = useState<any>(DUMMY_TOKENS);

    return (
        <ScrollArea className="flex w-full h-full overflow-y-auto pl-4 pt-4 pb-4">
            <div className='flex w-full h-full justify-center'>
                <div className='w-[900px] space-y-6'>
                    <div className='flex flex-row justify-between'>
                        <PortfolioStats />
                        <div className='w-[436px] h-[200px]'>
                            <PortfolioChart width={436} height={144} />
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

                </div>
            </div>
        </ScrollArea>
    )
}
