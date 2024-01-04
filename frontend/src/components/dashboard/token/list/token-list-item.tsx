"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { TokenAsset } from "@/interface/token-asset";

interface TokenListItemProps {
    asset: TokenAsset;
}

export const TokenListItem: React.FC<TokenListItemProps> = ({ asset }: TokenListItemProps) => {
    return (
        <div className='flex flex-row w-full h-full p-4 items-center space-x-3'>
            <Avatar className='w-[40px] h-[40px]'>
                <AvatarImage className='w-[40px] h-[40px]' src={asset.avatar} alt={asset.name} />
                <AvatarFallback className="bg-zinc-700"></AvatarFallback>
            </Avatar>
            <div className='flex flex-col w-full'>
                <div className='flex justify-between'>
                    <span className='text-neutral-300 text-base'>{asset.name}</span>
                    <span className='text-neutral-300 text-base'>{asset.value} {asset.name}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[12px] text-neutral-400'>{asset.full_name} {asset.wallets ? asset.wallets.length + ' ~ wallets' : ''}</span>
                    <span className='text-sm text-green-600'>${asset.usd_value}</span>
                </div>
            </div>

        </div>
    )
}

export default TokenListItem;