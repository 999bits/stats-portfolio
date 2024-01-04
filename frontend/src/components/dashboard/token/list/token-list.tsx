"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { TokenAsset } from "@/interface/token-asset";
import TokenListItem from "./token-list-item";

interface TokenListProps {
    tokenAssets: Array<TokenAsset>
}

export const TokenList: React.FC<TokenListProps> = ({ tokenAssets }: TokenListProps) => {
    return (
        <div className='flex flex-col w-full h-full bg-neutral-900 border-[1px] border-zinc-800 rounded-md space-y-6'>
            <span className='pt-4 pl-4 text-base text-neutral-300'>Tokens</span>
            <ScrollArea className='w-full h-full rounded-md'>
                <div>
                    {
                        tokenAssets.map((asset: TokenAsset, index) => (
                            <div className='flex flex-col h-[72px]' key={index}>
                                <TokenListItem asset={asset} />
                                <Separator className='bg-neutral-800' />
                            </div>
                        ))
                    }
                </div>
            </ScrollArea>
        </div>
    )
}

export default TokenList;