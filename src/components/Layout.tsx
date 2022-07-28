import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import MyModal from "./UI/MyModal/MyModal";
import {useSelector} from "react-redux";
import {modalSelector} from "../redux/slices/modalSlice";


const Layout: FC = () => {

    const {body} = useSelector(modalSelector)
    return (
        <>
            <MyModal>
                {body}
            </MyModal>
            <Header/>
            <main className={'content'}>

                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;