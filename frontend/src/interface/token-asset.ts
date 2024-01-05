import { Wallet } from ".";

export interface TokenAsset {
    name: string;
    full_name: string;
    avatar: string;
    percent: number;
    wallets: Array<Wallet>;
    value: number;
    usd_value: number;
    color: string;
}

