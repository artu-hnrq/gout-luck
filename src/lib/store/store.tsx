import { configureStore } from '@reduxjs/toolkit'
import LotteryReducer from '@/components/lottery/slice'


export const store = configureStore({
    reducer: {
        lottery: LotteryReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch