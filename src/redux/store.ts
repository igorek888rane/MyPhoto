import {configureStore} from "@reduxjs/toolkit";
import user from './slices/userSlice'
import modal from './slices/modalSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer:{
        user,
        modal,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: ['modal/setModal'],
                ignoredPaths:['modal.body'],
            }
        })
})



 export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch