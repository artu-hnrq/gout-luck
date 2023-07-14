'use client'

import { Lottery, Record, Round, Ticket, } from '@/lib/sdk/types'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/components/lottery/data-columns'
import { RoundsPanel } from '@/components/round/panel'

import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { setRound, selectLottery, selectCurrentIndex, selectCurrentDrawn } from './slice'

import { DrawnBadge } from "@/components/drawn/badge"


export interface LotteryPanelProps extends Record<Lottery> {
    tickets: Record<Ticket>[]
    rounds: Record<Round>[]
}

export function LotteryPanel() {

    const lottery = useAppSelector(selectLottery);
    const index = useAppSelector(selectCurrentIndex);
    const drawn = useAppSelector(selectCurrentDrawn)

    console.log(lottery)

    const dispatch = useAppDispatch();

    return (
        <div className='flex items-start justify-center gap-4'>
            <div className="flex flex-col gap-4 items-center justify-center max-w-6xl w-[1000px]">
                <h4 className="text-xl font-semibold leading-none tracking-tight p-2 pb-4">
                    Números sorteados até a {index}º rodada:
                </h4>
                <div className='grid grid-flow-row grid-cols-10 gap-1 items-center justify-center'>
                    {drawn.map((value, i) => {
                        return (
                            <DrawnBadge key={i} highlighted>{value}</DrawnBadge>
                        )
                    })}
                </div>
                <h3 className="text-xl font-semibold leading-none tracking-tight p-2 pb-4">
                    Bilhetes ({lottery.tickets.length} no {index}º sorteio)
                </h3>
                <DataTable columns={columns} data={lottery.tickets} />
            </div>
            <div className="max-w-[17rem] w-[1000px]">
                <RoundsPanel rounds={lottery.rounds} index={index} setIndex={(i) => dispatch(setRound(i))} />
            </div>
        </div >
    )
}