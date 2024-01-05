"use client"
import { useState } from "react";
import { Wallet } from "@/interface";
import WalletItem from "./wallet-item";
import { Button } from "@/components/ui/button";
import { BsPlusLg } from "react-icons/bs";
import initWallets from "../../../config/wallets.json"

export const WalletBoard: React.FC = () => {

    const [wallets, setWallets] = useState<any>(initWallets);

    return (
        <div className='w-full h-auto space-y-2'>
            <div className='grid grid-cols-2 gap-4'>
                {wallets && Array.isArray(wallets) ? (
                    wallets.map((wallet: Wallet, index) => (
                        <WalletItem wallet={wallet} key={index} index={index} />
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className="flex justify-end">
                <Button className='rounded-md bg-transparent hover:bg-zinc-800 text-cyan-500 space-x-2' variant="secondary">
                    <BsPlusLg />
                    <span>Add Wallet</span>
                </Button>
            </div>
        </div>
    )
}

export default WalletBoard;