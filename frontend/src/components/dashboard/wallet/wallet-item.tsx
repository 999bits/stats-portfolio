"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Token, Wallet } from "@/interface"
import WalletChart from "./wallet-chart"

interface WalletItemProps {
    wallet: Wallet
}

export const WalletItem: React.FC<WalletItemProps> = ({ wallet }: WalletItemProps) => {

    return (
        <div className='flex flex-row p-[12px] items-center space-x-8 bg-neutral-900 border-[1px] border-zinc-800 rounded-md'>
            <div className='flex flex-col flex-1 space-y-2'>
                <span className='text-sm font-bold'>{wallet.name}</span>
                <span className='text-2xl font-bold'>${wallet.value}</span>
            </div>
            <div className='flex flex-row flex-1'>
                {wallet.tokens && Array.isArray(wallet.tokens) ? (
                    wallet.tokens.slice(0, 4).map((token: Token, index) => (
                        <Avatar className="w-[24px] h-[24px] -ml-1" key={index}>
                            <AvatarImage src={token.avatar} alt={token.name} />
                            <AvatarFallback></AvatarFallback>
                        </Avatar>
                    ))
                ) : (
                    <div></div>
                )}
                {wallet.tokens.length > 4 ? <span className='text-neutral-400 text-sm font-bold ml-2'>+{wallet.tokens.length - 4}</span> : <></>}
            </div>
            <div className="w-[115px]">
                <WalletChart wallet={wallet}></WalletChart>
            </div>
        </div>
    )
}

export default WalletItem;