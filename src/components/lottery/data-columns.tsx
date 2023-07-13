"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Record, Ticket } from "@/lib/sdk/types"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Record<Ticket>>[] = [
    {
        header: "Comprador",
        accessorFn: row => row.fields.buyer,
    },
    {
        header: "Aposta",
        accessorFn: row => row.fields.bets_str.split(','),
        cell: info => (
            <>
                {
                    info.getValue<string[]>().map((value, index) => {
                        let color = 'bg-slate-500'

                        if (value.includes('*')) {
                            value = value.replace('*', '')
                            color = 'bg-green-400'
                        }

                        return (
                            <Badge key={index} className={`${color} rounded-2xl p-0.5 px-1 mx-0.5`}>
                                {value}
                            </Badge >
                        )
                    })
                }
            </>
        )
    },
    {
        header: "Acertos",
        accessorFn: row => row.fields.hit_count,
    },
]