import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPhotoCard, IUser} from "../../@types/types";
import {RootState} from "../store";

const initialState:IUser = {
    id:'',
    email:'',
    token:'',
    userName:'Tsuker26',
    userStatus:'Student',
    userAvatar:'',
    photoCard:[],
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setPhotoCard(state,action:PayloadAction<IPhotoCard[]>){
            state.photoCard = action.payload
        }
    }
})


export  const userSelector =(state: RootState) => state.user

export const {setPhotoCard} = userSlice.actions

export default userSlice.reducer