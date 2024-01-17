import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateAction } from "./actions";

const initialState: StateAction = {
    configData: {
        isModalOpen: false
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen: (state, action: PayloadAction<boolean>) => {
            state.configData.isModalOpen = action.payload;
        }
    }
})

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;