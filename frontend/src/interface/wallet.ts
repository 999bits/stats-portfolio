import { Token } from ".";

export interface Wallet {
    name: string;
    address: string;
    value: number;
    tokens: Array<Token>;
    data: any;
}
