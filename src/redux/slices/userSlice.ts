import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../@types/types";
import {RootState} from "../store";
import axios from "../../utils/axios";

export enum Status {
    loading = 'loading',
    success = 'success',
    error = 'error',
}

interface IUserState {
    data: IUser | null,
    status: string,
}

const initialState: IUserState = {
    data: null,
    status: Status.loading,
}
type Tparams = {
    params: {
        userName: string;
        email?: string;
        password: string
    },
    auth: string

}

export const authUser = createAsyncThunk<IUser, Tparams>('user/auth', async ({params, auth}) => {
    try {
        const {data} = await axios.post(auth, params)
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        return data
    } catch (e) {
        console.log(e);
    }
})

export const getMe = createAsyncThunk<IUser>('auth/getMe', async () => {
    try {
        const {data} = await axios.get('/user/me')
        return data
    } catch (error) {
        console.log(error)
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            window.localStorage.removeItem('token')
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(authUser.fulfilled, (state: IUserState, action) => {
            state.data = action.payload
            state.status = Status.success
        })
        builder.addCase(authUser.rejected, (state) => {
            state.status = Status.error;
        })
        builder.addCase(getMe.pending, (state) => {
            state.status = Status.loading
        })
        builder.addCase(getMe.fulfilled, (state: IUserState, action) => {
            state.data = action.payload
            state.status = Status.success
        })
        builder.addCase(getMe.rejected, (state) => {
            state.status = Status.error;
        })
    }
})


export const userSelector = (state: RootState) => state.user

export const authSelector = (state: RootState) => state.user.data

export const {logout} = userSlice.actions

export default userSlice.reducer



