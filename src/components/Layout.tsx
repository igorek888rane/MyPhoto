import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import MyModal from "./UI/MyModal/MyModal";
import {useSelector} from "react-redux";
import {modalSelector} from "../redux/slices/modalSlice";
import {useAppDispatch} from "../redux/store";
import {getMe} from "../redux/slices/userSlice";


const Layout: FC = () => {

    const {body} = useSelector(modalSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

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