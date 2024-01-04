"use client"
import { PortfolioStats } from "@/components/dashboard";
import WalletBoard from "@/components/dashboard/wallet/wallet-board";

export default function Dashboard() {
    console.log("Called here");
    return (
        <div className='flex w-full h-auto justify-center'>
            <div className='w-[900px]'>
                <PortfolioStats />
                <WalletBoard />
            </div>
        </div>
    )
}
