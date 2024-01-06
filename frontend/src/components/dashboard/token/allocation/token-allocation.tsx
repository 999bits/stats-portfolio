"use client"

import { useEffect, useState } from "react";
import TokenAssetChart from "./token-asset-chart";
import TokenAssetItem from "./token-asset-item";
import { TokenAsset } from "@/interface/token-asset";

interface TokenAllocationProps {
    tokenAssets: Array<TokenAsset>;
}

export const TokenAllocation: React.FC<TokenAllocationProps> = ({ tokenAssets }: TokenAllocationProps) => {

    const colors = ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'];
    const [assets, setAssets] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);

    const handleMakeChartData = () => {

        if (tokenAssets && Array.isArray(tokenAssets)) {
            const newAssets = tokenAssets.slice(0, 4).map((asset: TokenAsset, index) => {
                asset.color = colors[index];
                return asset.percent;
            });

            const newLabels = tokenAssets.slice(0, 4).map((asset: TokenAsset, index) => {
                return asset.name;
            });
            setAssets(newAssets);
            setLabels(newLabels);
        }
    }

    useEffect(() => {
        handleMakeChartData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokenAssets]);

    return (
        <div className='flex flex-col w-full h-full bg-neutral-900 border-[1px] border-zinc-800 rounded-md p-4 space-y-6'>
            <span className='text-neutral-300 text-base'>Token Allocation</span>
            <div className='flex justify-center'>
                {Array.isArray(assets) && Array.isArray(labels) && assets.length > 0 && labels.length > 0 && (
                    <TokenAssetChart assets={assets} labels={labels} colors={colors} width={270} height={250}></TokenAssetChart>
                )}
            </div>
            <div className='flex justify-center'>
                <div className='w-full grid grid-cols-2 gap-4'>
                    {tokenAssets && Array.isArray(tokenAssets) ? (
                        tokenAssets.slice(0, 4).map((asset: TokenAsset, index) => (
                            <TokenAssetItem asset={asset} key={index} />
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TokenAllocation;