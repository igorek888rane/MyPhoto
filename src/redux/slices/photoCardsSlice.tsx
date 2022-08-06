import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Status} from "./authSlice";
import {IPhotoCard} from "../../@types/types";
import axios from "../../utils/axios";


interface photoCardState {
    photoCards: IPhotoCard[],
    photoCard: IPhotoCard | null,
    status: string | null,
    statusCreate: string | null,
    statusUpdate: string | null,
}


const initialState: photoCardState = {
    photoCards: [],
    photoCard: null,
    status: null,
    statusCreate: null,
    statusUpdate: null,
}


export const fetchPhotoCards = createAsyncThunk<IPhotoCard[], string>('photoCard/photoCards', async (id) => {
    const {data} = await axios.get(`/photo/get-photo-user/${id}`)
    return data
})

type dataType = {
    photoCard: IPhotoCard,
    success: boolean,
    message: string
}

export const createPhotoCard = createAsyncThunk<dataType, FormData>('photoCard/createPhotoCard', async (params) => {

    const {data} = await axios.post(`/photo/create-photo`, params, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    })
    return data
})
export const fetchOnePhotoCard = createAsyncThunk<IPhotoCard, string>('photoCard/fetchOnePhotoCard', async (id) => {
    const {data} = await axios.get(`/photo/get-one/${id}`)
    return data
})
export const deletePhoto = createAsyncThunk<IPhotoCard, string>('photoCard/deletePhoto', async (id) => {
    const {data} = await axios.delete(`/photo/delete/${id}`)
    return data
})
type paramsUpdate = {
    id: string,
    params: {
        description?: string
        likes?: number,
    }
}
export const updatePhoto = createAsyncThunk('photoCard/updatePhoto', async ({id, params}: paramsUpdate) => {
    await axios.put(`/photo/update-photo/${id}`, params)
})

export const photoCardSlice = createSlice({
    name: 'photoCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchPhotoCards.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(fetchPhotoCards.fulfilled, (state: photoCardState, action) => {
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
        builder.addCase(createPhotoCard.fulfilled, (state: photoCardState, action) => {
            state.photoCards.push(action.payload?.photoCard)
            state.statusCreate = Status.success
        })
        builder.addCase(createPhotoCard.rejected, (state: photoCardState) => {
            state.statusCreate = Status.error;
        })
        builder.addCase(fetchOnePhotoCard.pending, (state) => {
            state.statusCreate = Status.loading
        })
        builder.addCase(fetchOnePhotoCard.fulfilled, (state: photoCardState, action) => {
            state.photoCard = action.payload
            state.statusCreate = Status.success
        })
        builder.addCase(fetchOnePhotoCard.rejected, (state: photoCardState) => {
            state.statusCreate = Status.error;
        })
        builder.addCase(deletePhoto.pending, (state) => {
            state.statusCreate = Status.loading
        })
        builder.addCase(deletePhoto.fulfilled, (state: photoCardState, action) => {
            state.photoCards = state.photoCards.filter(photo => photo._id !== action.payload._id)
            state.photoCard = null
            state.statusCreate = Status.success
        })
        builder.addCase(deletePhoto.rejected, (state: photoCardState) => {
            state.statusCreate = Status.error;
        })
        builder.addCase(updatePhoto.pending, (state) => {
            state.statusUpdate = Status.loading
        })
        builder.addCase(updatePhoto.fulfilled, (state: photoCardState) => {
            state.statusUpdate = Status.success
        })
        builder.addCase(updatePhoto.rejected, (state: photoCardState) => {
            state.statusUpdate = Status.error;
        })


    }
})


export const photoSelector = (state: RootState) => state.photoCards

// export const {} = photoCardSlice.actions

export default photoCardSlice.reducer