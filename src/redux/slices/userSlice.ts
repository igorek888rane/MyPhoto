import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username:'',
    userStatus:'',
    userAvatar:'',
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})