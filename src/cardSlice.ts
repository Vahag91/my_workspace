import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Interface } from "readline";


export interface CardState {
    id: string,
    content: string
}

const initialState : CardState[] = [{
    id: "2",
    content: ""
}]


export  const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<CardState>) => {
            return [...state, action.payload]
        }
    }
})


export const { setCard } = cardSlice.actions
export default cardSlice.reducer
