import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


export type ModalState = {
    active: boolean;
    body:  JSX.Element | null;
}

const initialState: ModalState = {
    active: false,
    body: null,

}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<ModalState>) {
            state.active = action.payload.active
            state.body = action.payload.body
        }

    }
})

export  const modalSelector =(state: RootState) => state.modal

export const {setModal} = modalSlice.actions

export default modalSlice.reducer