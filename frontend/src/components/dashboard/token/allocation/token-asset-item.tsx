"use client"

import { TokenAsset } from "@/interface/token-asset";

interface TokenAssetItemProps {
    asset: TokenAsset;
}

export const TokenAssetItem: React.FC<TokenAssetItemProps> = ({ asset }: TokenAssetItemProps) => {
    return (
        <div className='flex flex-row w-full items-center space-x-2 text-sm'>
            <div className="w-4 h-4 rounded-sm bg-cyan-500"></div>
            <span>{asset.name} ~ {asset.percent}%</span>
        </div>
    )
}

export default TokenAssetItem;