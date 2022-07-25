import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;