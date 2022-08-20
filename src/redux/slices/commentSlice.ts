import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Status} from "./authSlice";
import axios from "../../utils/axios";
import {IComment} from "../../@types/types";


export type CommentState = {
    comments: IComment[]
    statusCreate: string | null,
    status: string | null,
}

const initialState: CommentState = {
    comments: [],
    statusCreate: null,
    status: null,
}

export const fetchComments = createAsyncThunk<IComment[]>('comment/fetchComment', async () => {
    const {data} = await axios.get(`/comment/get-comments`)
    return data
})
type params = {
    photo: string,
    comment: string,
}

export const createComment = createAsyncThunk<IComment, params>('comment/createComment', async (params) => {
    const {data} = await axios.post('/comment/create-comment', params)
    return data
})


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.statusCreate = Status.loading
        })
        builder.addCase(fetchComments.fulfilled, (state: CommentState, action) => {
            state.comments = action.payload
            state.status = Status.success
        })
        builder.addCase(fetchComments.rejected, (state: CommentState) => {
            state.status = Status.error;
        })

        builder.addCase(createComment.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(createComment.fulfilled, (state: CommentState, action) => {
            state.comments.push(action.payload)
            state.statusCreate = Status.success
        })
        builder.addCase(createComment.rejected, (state: CommentState) => {
            state.statusCreate = Status.error;
        })

    }
})

export const commentSelector = (state: RootState) => state.comment

// export const {} = commentSlice.actions

export default commentSlice.reducer