
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { LuFilter } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { PopOverComboBox } from "@/components/ui/popover-combo-box";
import { PopOverDatePickerWithRange } from "@/components/ui/popover-datepicker";
import { PopOverPriceRange } from "./popover-pricerange";
import { addDays } from "date-fns"

interface SmartFilterProps {

}

const tokens = [
    {
        value: "eth",
        label: "ETH",
        icon: "/images/dashboard/tokens/ethereum.svg"
    },
    {
        value: "shiba",
        label: "Shiba",
        icon: "/images/dashboard/tokens/shiba.svg"
    },
    {
        value: "1 inch",
        label: "1 inch",
        icon: "/images/dashboard/tokens/1inch.svg"
    },
    {
        value: "usdt",
        label: "USDT",
        icon: "/images/dashboard/tokens/usdt.svg"
    },
    {
        value: "usdc",
        label: "USDC",
        icon: "/images/dashboard/tokens/usdc.svg"
    },
]

const networks = [
    {
        value: "ethereum",
        label: "Ethereum",
    },
    {
        value: "polygon",
        label: "Polygon",
    },
    {
        value: "arbitrum",
        label: "Arbitrum",
    },
    {
        value: "solana",
        label: "Solana",
    },
    {
        value: "mumbai",
        label: "Mumbai",
    },
]

const daos = [
    {
        value: "uniswap",
        label: "Uniswap",
    },
    {
        value: "compound",
        label: "Compound",
    },
    {
        value: "decentraland",
        label: "Decentraland",
    },
    {
        value: "apecoin",
        label: "Ape Coin",
    },
    {
        value: "maker",
        label: "Maker",
    },
]

export const SmartFilter: React.FC<SmartFilterProps> = () => {

    const [from, setFrom] = useState(new Date());

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex w-[207px] h-[40px] bg-neutral-900 rounded-md items-center gap-2 text-neutral-500 pl-2'>
                    <LuFilter></LuFilter>
                    <span className="text-neutral-600 text-sm">Smart Filter</span>
                </div>
            </DialogTrigger>
            <DialogContent className='w-[347px] p-4 gap-5 border-[1px] border-zinc-700'>
                <DialogHeader>
                    <DialogDescription className='w-full text-center mt-6 text-xl text-smart-filter-title'>Smart Filter</DialogDescription>
                </DialogHeader>
                <PopOverComboBox
                    title='Token'
                    placeholder='Select Token'
                    datas={tokens}
                    button_style='w-full h-[44px] justify-between border-[1px] border-zinc-800'
                    popover_style='w-[315px] p-0'
                    need_search={true}></PopOverComboBox>
                <PopOverComboBox
                    title='Network'
                    placeholder='Select Network'
                    datas={networks}
                    button_style='w-full h-[44px] justify-between border-[1px] border-zinc-800'
                    popover_style='w-[315px] p-0'></PopOverComboBox>
                <PopOverPriceRange />
                <PopOverDatePickerWithRange
                    from={from}
                    to={addDays(from, 10)}
                    title='From ~ To'
                    buttonStyle='w-full h-[44px] justify-start text-left font-normal border-[1px] border-zinc-800'
                    dateFormat='LLL dd, y'></PopOverDatePickerWithRange>
                <PopOverComboBox
                    title='DAO'
                    placeholder='Select DAO'
                    datas={daos}
                    button_style='w-full h-[44px] justify-between border-[1px] border-zinc-800'
                    popover_style='w-[315px] p-0'></PopOverComboBox>
                <DialogFooter>
                    <Button className='w-full h-[44px] mt-4 mb-4 bg-zinc-800 hover:bg-zinc-700 text-neutral-400' type='submit' variant="secondary">Search</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SmartFilter;