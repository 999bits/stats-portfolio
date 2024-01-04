"use client"
import { useState } from "react";
import { Wallet } from "@/interface";
import WalletItem from "./wallet-item";

export const WalletBoard: React.FC = () => {

    const DUMMY_WALLETS = [
        {
            name: 'Wallet 01',
            address: '0xEE86283a2DFCc1f52E86790e275e5b07b44A50E5',
            value: '52,437.00',
            tokens: [
                {
                    name: 'USDC',
                    avatar: '/images/dashboard/tokens/usdc.svg',
                },
                {
                    name: 'Ethereum',
                    avatar: '/images/dashboard/tokens/ethereum.svg'
                },
                {
                    name: '1inch',
                    avatar: '/images/dashboard/tokens/1inch.svg'
                },
                {
                    name: 'USDT',
                    avatar: '/images/dashboard/tokens/usdt.svg'
                },
                {
                    name: 'Shiba',
                    avatar: '/images/dashboard/tokens/shiba.svg'
                }
            ]
        },
        {
            name: 'Wallet 02',
            address: '0xFF86283a2DFCc1f52E86790e275e5b07b44A50E5',
            value: '125,849.01',
            tokens: [
                {
                    name: 'USDT',
                    avatar: '/images/dashboard/tokens/usdc.svg'
                },
                {
                    name: 'Ethereum',
                    avatar: '/images/dashboard/tokens/ethereum.svg'
                },
                {
                    name: 'Shiba',
                    avatar: '/images/dashboard/tokens/shiba.svg'
                },
                {
                    name: '1inch',
                    avatar: '/images/dashboard/tokens/1inch.svg'
                }
            ]
        }
    ];

    const [wallets, setWallets] = useState<any>(DUMMY_WALLETS);

    return (
        <div className='flex flex-row w-full justify-between'>
            {wallets && Array.isArray(wallets) ? (
                wallets.map((wallet: Wallet, index) => (
                    <WalletItem wallet={wallet} key={index} />
                ))
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default WalletBoard;