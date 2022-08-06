import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import MyModal from "./UI/MyModal/MyModal";
import {useSelector} from "react-redux";
import {modalSelector} from "../redux/slices/modalSlice";
import {RootState, useAppDispatch} from "../redux/store";
import {getMe} from "../redux/slices/authSlice";



const Layout: FC = () => {

    const {body} = useSelector(modalSelector)
    const dispatch = useAppDispatch()
    const {status} = useSelector((state:RootState)=>state.auth)


    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    if(status==='loading'){
        return <h1>Загрузка...</h1>
    }
    return (
        <>
            <MyModal>{body}</MyModal>
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;