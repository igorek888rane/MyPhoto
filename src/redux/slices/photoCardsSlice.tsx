import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Status} from "./authSlice";
import {IPhotoCard} from "../../@types/types";
import axios from "../../utils/axios";


interface photoCardState {
    photoCards: IPhotoCard[],
    status: string | null
}


const initialState: photoCardState = {
    photoCards: [],
    status: null,
}


export const fetchPhotoCards = createAsyncThunk<IPhotoCard[], string>('user/photoCards', async (id) => {
    const {data} = await axios.get(`/photo/get-photo-user/${id}`)
    return data
})

export const photoCardSlice = createSlice({
    name: 'photoCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchPhotoCards.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(fetchPhotoCards.fulfilled, (state:photoCardState, action) => {
            state.photoCards = action.payload
            state.status = Status.success
        })
        builder.addCase(fetchPhotoCards.rejected, (state) => {
            state.status = Status.error;
            state.photoCards = []
        })

    }
})


export const photoSelector = (state: RootState) => state.photoCards

// export const {} = photoCardSlice.actions

export default photoCardSlice.reducer