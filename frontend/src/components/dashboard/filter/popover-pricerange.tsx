"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface PopOverPriceRangeProps {

}

export const PopOverPriceRange: React.FC<PopOverPriceRangeProps> = () => {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='w-full border-[1px] border-zinc-700 justify-start' variant="outline">Price</Button>
            </PopoverTrigger>
            <PopoverContent className='w-full border-[1px] border-zinc-700'>
                <div className='grid gap-4'>
                    <div className='space-y-2'>
                        <h4 className='font-medium leading-none'>Price Filter</h4>
                        <p className='text-sm text-muted-foreground'>
                            Select Min and Max Price
                        </p>
                    </div>
                    <div className='grid gap-4'>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='width'>Min</Label>
                            <Input
                                id='width'
                                defaultValue='0'
                                type='number'
                                className='col-span-2 w-full h-10 border-[1px] border-zinc-700'
                            />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                            <Label htmlFor='maxWidth'>Max</Label>
                            <Input
                                id='maxWidth'
                                type='number'
                                defaultValue='0'
                                className='col-span-2 w-full h-10 border-[1px] border-zinc-700'
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default PopOverPriceRange;