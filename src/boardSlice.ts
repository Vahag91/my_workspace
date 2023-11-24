import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Boards {
    name: string,
    color: string
}

export interface BoardSlice {
    boardList: Boards[]
}

const initialState: BoardSlice = {
    boardList: [
        { name: "Board", color: "green" }
    ]
}

export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        setBoard: (state, action: PayloadAction<Boards>) => {
            state.boardList.push(action.payload)
        }
        }
})

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer
