import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import { Lottery, Record, Round, Ticket } from '@/lib/sdk/types'
import { LotteryPanelProps } from './panel'

// Define a type for the slice state
export interface LotteryPanelState {
    index: number
    rounds: Record<Round>[]
    drawn: string[]
    tickets: Record<Ticket>[]
}

// Define the initial state using that type
const initialState: LotteryPanelState = {
    index: Number.MAX_VALUE,
    rounds: [],
    drawn: [],
    tickets: []
}

export const lotterySlice = createSlice({
    name: 'lottery',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setRound: (state, action: PayloadAction<number>) => {
            state.index = action.payload
        },
        setLottery: (state, action: PayloadAction<LotteryPanelProps>) => {
            const lottery = action.payload

            state.index = lottery.rounds.length
            state.rounds = lottery.rounds
            state.drawn = lottery.rounds.map((round, i) => {
                return Array.from(
                    new Set<string>(
                        lottery.rounds
                            .slice(0, i + 1)
                            .map((round) => round.fields.drawn_str)
                            .join(', ')
                            .split(', ')
                    )
                ).sort((a, b) => Number(a) - Number(b))
                    .join(', ')
            })
            state.tickets = lottery.tickets
        }
    }
})

export const { setRound, setLottery } = lotterySlice.actions

export default lotterySlice.reducer

export const selectLottery = (state: RootState) => state.lottery

export const selectCurrentIndex = (state: RootState) => state.lottery.index

export function selectCurrentDrawn(state: RootState) {
    return state.lottery.drawn[
        Math.min(state.lottery.index, state.lottery.drawn.length - 1)
    ].split(', ')
}
