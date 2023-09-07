import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Theme = 'dark' | null

interface AppState {
    theme: Theme,
}

const initialState: AppState = {
    theme: 'dark'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        }
    }
});

export const { changeTheme } = appSlice.actions;
export default appSlice.reducer