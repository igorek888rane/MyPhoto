import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../@types/types";
import axios from "../../utils/axios";
import {RootState} from "../store";

export enum Status {
    loading = 'loading',
    success = 'success',
    error = 'error',
}

interface IUserState {
    users:IUser[],
    user: IUser | null,
    status: string | null,
}

const initialState: IUserState = {
    users:[],
    user: null,
    status: null
}





export const fetchUser = createAsyncThunk<IUser,string>('user/fetchUser', async (username) => {

    const {data} = await axios.get(`/user/user/${username}`)
    return data

})
export const fetchUserById = createAsyncThunk<IUser,string>('user/fetchUserById', async (id) => {

    const {data} = await axios.get(`/user/user-by-id/${id}`)
    return data

})
export const fetchAllUsers = createAsyncThunk<IUser[]>('user/fetchAllUser', async () => {

    const {data} = await axios.get(`/user/users`)
    return data

})




export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            window.localStorage.removeItem('token')
            state.user = null
            state.status = null
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(fetchUser.fulfilled, (state: IUserState, action) => {
            state.user = action.payload
            state.status = Status.success
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.status = Status.error;
        })
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(fetchAllUsers.fulfilled, (state: IUserState, action) => {
            state.users = action.payload
            state.status = Status.success
        })
        builder.addCase(fetchAllUsers.rejected, (state) => {
            state.status = Status.error;
        })
    }
})

//
 export const userSelector = (state:RootState) => state.user
//
// export const authSelector = (state: RootState) => state.auth.data
//
// export const {logout} = authSlice.actions
//
 export default userSlice.reducer



