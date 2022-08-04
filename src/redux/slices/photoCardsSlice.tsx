import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Status} from "./authSlice";
import {IPhotoCard} from "../../@types/types";
import axios from "../../utils/axios";


interface photoCardState {
    photoCards: IPhotoCard[],
    status: string | null,
    statusCreate: string | null,
}


const initialState: photoCardState = {
    photoCards: [],
    status: null,
    statusCreate: null,
}


export const fetchPhotoCards = createAsyncThunk<IPhotoCard[], string>('photoCard/photoCards', async (id) => {
    const {data} = await axios.get(`/photo/get-photo-user/${id}`)
    return data
})

type dataType ={
    photoCard:IPhotoCard,
    success:boolean,
    message:string
}

export const createPhotoCard = createAsyncThunk<dataType, FormData>('photoCard/createPhotoCard', async (params) => {

    const {data} = await axios.post(`/photo/create-photo`,params,{
        headers:{
            'Content-type':'multipart/form-data'
        }
    })
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
        builder.addCase(createPhotoCard.pending, (state) => {
            state.statusCreate = Status.loading
        })
        builder.addCase(createPhotoCard.fulfilled, (state:photoCardState, action) => {
            state.photoCards.push(action.payload?.photoCard)
            state.statusCreate = Status.success
        })
        builder.addCase(createPhotoCard.rejected, (state:photoCardState) => {
            state.statusCreate = Status.error;
            // state.photoCards = []
        })

    }
})


export const photoSelector = (state: RootState) => state.photoCards

// export const {} = photoCardSlice.actions

export default photoCardSlice.reducer