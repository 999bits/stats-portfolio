"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Token, Wallet } from "@/interface"

interface WalletChartProps {
    wallet: Wallet
}

export const WalletChart: React.FC<WalletChartProps> = ({ wallet }: WalletChartProps) => {

    return (
        <div className='flex flex-row'>
        </div>
    )
}

export default WalletChart;