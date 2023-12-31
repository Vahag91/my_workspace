import { configureStore } from "@reduxjs/toolkit"
import userReducer from "userSlice"
import boardReducer from 'boardSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        boards: boardReducer,

    },
})



export type RootState = ReturnType<typeof store.getState>