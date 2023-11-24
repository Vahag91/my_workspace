import { configureStore } from "@reduxjs/toolkit"
import userReducer from "userSlice"
import boardReducer from 'boardSlice'
import cardReducer from './cardSlice'
import columnReducer from './cardSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        boards: boardReducer,
        card: cardReducer,
        column: columnReducer
    },
})



export type RootState = ReturnType<typeof store.getState>