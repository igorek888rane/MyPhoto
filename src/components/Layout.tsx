import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import MyModal from "./UI/MyModal/MyModal";
import EditPhoto from "./EditPhoto/EditPhoto";



const Layout: FC = () => {
    return (
        <>
            <MyModal>
                <EditPhoto/>
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