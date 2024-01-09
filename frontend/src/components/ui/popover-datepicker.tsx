"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface PopOverDatePickerWithRangeProps {
    from?: Date;
    to?: Date;
    title: string;
    buttonStyle: string;
    dateFormat: string;
}

export const PopOverDatePickerWithRange: React.FC<PopOverDatePickerWithRangeProps> = ({ from, to, title, buttonStyle, dateFormat }: PopOverDatePickerWithRangeProps) => {

    const [date, setDate] = React.useState<DateRange | undefined>({
        from: !from ? new Date() : from,
        to: !to ? new Date() : to,
    });

    return (
        <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={buttonStyle}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, dateFormat)} -{" "}
                                    {format(date.to, dateFormat)}
                                </>
                            ) : (
                                format(date.from, dateFormat)
                            )
                        ) : (
                            <span>{title}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default PopOverDatePickerWithRange;