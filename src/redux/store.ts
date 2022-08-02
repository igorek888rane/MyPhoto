import {configureStore} from "@reduxjs/toolkit";
import auth from './slices/authSlice'
import user from './slices/userSlice'
import modal from './slices/modalSlice'
import photoCards from './slices/photoCardsSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer:{
        user,
        auth,
        modal,
        photoCards,
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