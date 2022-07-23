import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout :FC  = () => {
    return (
        <div className={'container'}>
            <Header/>
        <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;