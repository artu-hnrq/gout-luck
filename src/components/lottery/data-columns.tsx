"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DrawnBadge } from "@/components/drawn/badge"

import { useAppSelector } from '@/lib/store/hooks';
import { selectCurrentDrawn } from './slice'
import { Record, Ticket } from "@/lib/sdk/types";


export const columns: ColumnDef<Record<Ticket>>[] = [
    {
        header: "Comprador",
        accessorFn: row => row.fields.buyer,
    },
    {
        header: "Aposta",
        accessorFn: row => row.fields.bets_str,
        cell: function (info) {
            const drawn = useAppSelector(selectCurrentDrawn);
            return (
                <div className="grid grid-flow-row grid-cols-10 gap-0.5 items-center justify-center w-fit">
                    {
                        info.getValue<string>()
                            .split(', ')
                            .sort((a, b) => Number(a) - Number(b))
                            .map((bet, i) => {
                                return (
                                    <DrawnBadge key={i} highlighted={drawn.includes(bet)}>{bet}</DrawnBadge>
                                )
                            })
                    }
                </div>
            )
        }
    },
    {
        header: "Acertos",
        accessorFn: row => row.fields.bets_str,
        cell: function (info) {
            const drawn = useAppSelector(selectCurrentDrawn)
            return info.getValue<string>().split(', ').filter((bet) => drawn.includes(bet)).length
        }
    },
]