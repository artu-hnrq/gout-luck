'use client'

import { DrawnBadge } from "@/components/drawn/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Record, Round } from "@/lib/sdk/types"
import { cn } from "@/lib/utils"


export interface RoundCheckboxProps {
    className?: string,
    round: Record<Round>
    selected: boolean
    onCheckedChange: (value: string | boolean) => void
}

export function RoundCheckbox({ className, round, selected: highlighted, onCheckedChange }: RoundCheckboxProps) {
    return (
        <div className={cn(
            "flex flex-row items-center justify-center space-x-3",
            "w-full p-4 rounded-md border",
            highlighted
                ? 'border-green-200 bg-green-100'
                : 'bg-slate-100',
            className
        )}>
            <Checkbox
                className=""
                checked={highlighted}
                onCheckedChange={onCheckedChange}
            />

            <div className={cn("flex flex-col items-start justify-center space-y-1")}>
                <h4 className={cn("text-[0.6rem] font-medium text-slate-500 w-fit")}>
                    {round.fields.datetime}
                </h4>
                <div className="grid grid-flow-col grid-cols-6 items-start justify-center space-x-1 space-y-0">
                    {round.fields.drawn_str.split(',').sort((a, b) => Number(a) - Number(b)).map((value, i) => {
                        return (
                            <DrawnBadge key={i} highlighted={highlighted}>
                                {value}
                            </DrawnBadge>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export function RoundCheckboxSkeleton() {
    return (
        <div className={cn(
            "flex flex-row items-start space-x-3 space-y-0",
            "w-full p-4 rounded-md border",
        )}>
            <div>
                <Checkbox
                    checked={false}
                    onCheckedChange={() => { }}
                />
            </div>
            <div className="flex flex-row items-start justify-center space-x-1 space-y-0">
                <Badge className="bg-gray-200 rounded-2xl p-0.5 px-1" >
                    00
                </Badge>
                <Badge className="bg-gray-200 rounded-2xl p-0.5 px-1" >
                    00
                </Badge>
                <Badge className="bg-gray-200 rounded-2xl p-0.5 px-1" >
                    00
                </Badge>
                <Badge className="bg-gray-200 rounded-2xl p-0.5 px-1" >
                    00
                </Badge>
                <Badge className="bg-gray-200 rounded-2xl p-0.5 px-1" >
                    00
                </Badge>
            </div>
        </div >
    )
}