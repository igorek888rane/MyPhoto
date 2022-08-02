import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/App.scss';
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import PhotoCardPage from "./pages/PhotoCardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import {useSelector} from "react-redux";
import {authSelector} from "./redux/slices/userSlice";


function App() {

    const auth = useSelector(authSelector)

    return (
        <div className="App">
            {auth? <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path = '' element={<HomePage/>}/>
                    <Route path = '/profile' element={<ProfilePage/>}/>
                    <Route path = '/profile/:id' element={<PhotoCardPage/>}/>
                    <Route path = '/setting' element={<SettingPage/>}/>
                    <Route path = '*' element={<HomePage/>}/>
                </Route>
            </Routes>
            : <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path = '' element={<WelcomePage/>}/>
                        <Route path = 'login' element={<LoginPage/>}/>
                        <Route path = '/register' element={<RegisterPage/>}/>
                        <Route path = '*' element={<WelcomePage/>}/>
                    </Route>
                </Routes>}


        </div>
    );
}

export default App;
