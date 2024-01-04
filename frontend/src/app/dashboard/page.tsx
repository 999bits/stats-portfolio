"use client"
import { useState } from "react";
import { PortfolioStats } from "@/components/dashboard";
import TokenAllocation from "@/components/dashboard/token/allocation/token-allocation";
import WalletBoard from "@/components/dashboard/wallet/wallet-board";
import TokenList from "@/components/dashboard/token/list/token-list";

export default function Dashboard() {
    // name: string;
    // full_name: string;
    // percent: number;
    // wallets: Array<Wallet>;
    // value: number;
    // usd_value: number;
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
        }
    ];

    const [tokenAssets, setTokenAssets] = useState<any>(DUMMY_TOKENS);

    return (
        <div className='flex w-full h-auto justify-center'>
            <div className='w-[900px] space-y-6'>
                <PortfolioStats />
                <WalletBoard />
                <div className='flex flex-row justify-between'>
                    <div className='w-[334px]'>
                        <TokenAllocation tokenAssets={tokenAssets}></TokenAllocation>
                    </div>
                    <div className='w-[545px]'>
                        <TokenList tokenAssets={tokenAssets}></TokenList>
                    </div>
                </div>

            </div>
        </div>
    )
}
