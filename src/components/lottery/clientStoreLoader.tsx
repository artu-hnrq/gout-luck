'use client'

import { store } from '@/lib/store'
import { useRef } from 'react'
import { setLottery } from './slice'
import { LotteryPanelProps } from './panel'


export function ClientStoreLoader({ lottery }: { lottery: LotteryPanelProps }) {
    const loader = useRef(false)

    if (!loader.current) {
        store.dispatch(setLottery(lottery))
        loader.current = true
    }

    return null
}