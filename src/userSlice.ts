import { createSlice, PayloadAction } from "@reduxjs/toolkit";



  export interface UserState {
    username: string | null,
    email: string | null,
    password: string | null,
    isLogged: boolean

}

const initialState: UserState = {
    username: "",
    email: "",
    password: "",
    isLogged: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string | null>) => {
            state.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string | null>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string | null>) => {
            state.password = action.payload;
        },
        setIsLogged: (state) => {
            state.isLogged = !state.isLogged
        }

    }
})

export const { setUsername, setEmail, setPassword, setIsLogged } = userSlice.actions;
export default userSlice.reducer;