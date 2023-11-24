import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ColumnState {
    id: string;
    content: string;
}

 const initialState: ColumnState[] = [{
    id: "1",
    content: "Todo",
}]

export const columnSlice = createSlice({
    name: "column",
    initialState,
    reducers: {
        setColumn: (state, action: PayloadAction<ColumnState>) => {
            return [...state, action.payload]
        }
    }
})

export const { setColumn } = columnSlice.actions
export default columnSlice.reducer

