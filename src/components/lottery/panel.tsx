'use client'

import { Lottery, Record, Round, Ticket, } from '@/lib/sdk/types'
import { DataTable } from '../ui/data-table'
import { columns } from './data-columns'
import { RoundsPanel } from '../round/panel'

import { useState, useEffect } from 'react'


export interface LotteryPanelProps extends Record<Lottery> {
    tickets: Record<Ticket>[]
    rounds: Record<Round>[]
}

export function LotteryPanel({ lottery }: { lottery: LotteryPanelProps }) {

    const [index, setIndex] = useState(lottery.rounds.length)

    function getSelectedRoundDrawnNumbers(i: number = index): Set<string> {
        let drawn = new Set<string>()
        for (const round of lottery.rounds.slice(0, i)) {
            for (const number of round.fields.drawn_str.split(',')) {
                drawn.add(number)
            }
        }
        return drawn
    }

    const [drawn, setDrawn] = useState(getSelectedRoundDrawnNumbers())

    useEffect(() => {
        setDrawn(getSelectedRoundDrawnNumbers())
    }, [index])


    return (
        <>
            <div className="max-w-6xl w-[1000px]">
                <h4>{Array.from(drawn).join(', ')}</h4>
                <h3 className="text-xl font-semibold leading-none tracking-tight p-2 pb-4">
                    Bilhetes
                </h3>
                <DataTable columns={columns} data={lottery.tickets} />
            </div>
            <div className="max-w-[17rem] w-[1000px]">
                <RoundsPanel rounds={lottery.rounds} index={index} setIndex={setIndex} />
            </div >
        </>
    )
}