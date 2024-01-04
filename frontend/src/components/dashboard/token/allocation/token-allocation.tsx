"use client"

import { useState } from "react";
import TokenAssetChart from "./token-asset-chart";
import TokenAssetItem from "./token-asset-item";
import { TokenAsset } from "@/interface/token-asset";

interface TokenAllocationProps {
    tokenAssets: Array<TokenAsset>;
}

export const TokenAllocation: React.FC<TokenAllocationProps> = ({ tokenAssets }: TokenAllocationProps) => {

    return (
        <div className='flex flex-col w-full h-full bg-neutral-900 border-[1px] border-zinc-800 rounded-md p-4 space-y-6'>
            <span className='text-neutral-300 text-base'>Token Allocation</span>
            <TokenAssetChart></TokenAssetChart>
            <div className='flex justify-center'>
                <div className='w-full grid grid-cols-2 gap-4'>
                    {tokenAssets && Array.isArray(tokenAssets) ? (
                        tokenAssets.map((asset: TokenAsset, index) => (
                            <TokenAssetItem asset={asset} key={index} />
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TokenAllocation;