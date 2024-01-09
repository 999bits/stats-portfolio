"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";

interface PopOverComboBoxProps {
    datas: any;
    title?: string;
    placeholder?: string;
    button_style: string;
    popover_style: string;
    need_search?: Boolean;
}

export const PopOverComboBox: React.FC<PopOverComboBoxProps> = ({ datas, title, placeholder, button_style, popover_style, need_search }: PopOverComboBoxProps) => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const foundData = datas.find((data: any) => data.value === value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={button_style}
                >
                    <div className='flex flex-row space-x-2'>
                        {value && foundData.icon
                            ?
                            <Avatar className='w-[20px] h-[20px]'>
                                <AvatarImage src={foundData.icon} alt={foundData.name} />
                                <AvatarFallback className="bg-zinc-700"></AvatarFallback>
                            </Avatar>
                            : <></>}
                        <span>
                            {value
                                ? foundData?.label
                                : title}
                        </span>
                    </div>
                    {open
                        ? <ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        : <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    }

                </Button>
            </PopoverTrigger>
            <PopoverContent className={popover_style}>
                <Command className='bg-zinc-800'>
                    {need_search && <CommandInput className='!text-white' placeholder={placeholder} />}

                    <CommandEmpty>No data found.</CommandEmpty>
                    <CommandGroup className="bg-zinc-800">
                        {datas.map((data: any) => (
                            <CommandItem
                                className='!bg-zinc-800 hover:!bg-zinc-700 h-[44px]'
                                key={data.value}
                                value={data.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <div className='flex flex-row w-full justify-between'>
                                    <div className='flex flex-row space-x-3'>
                                        {data.icon
                                            ? <Avatar className='w-[20px] h-[20px]'>
                                                <AvatarImage className='w-[20px] h-[20px]' src={data.icon} alt={data.name} />
                                                <AvatarFallback className="bg-zinc-700"></AvatarFallback>
                                            </Avatar>
                                            :
                                            <></>
                                        }

                                        <span>{data.label}</span>
                                    </div>

                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === data.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default PopOverComboBox;