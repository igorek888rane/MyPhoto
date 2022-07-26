import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/App.scss';
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import PhotoCardPage from "./pages/PhotoCardPage";


function App() {
    return (
        <div className="App">
        <Routes>
           <Route path='/' element={<Layout/>}>
               <Route path = '' element={<HomePage/>}/>
               <Route path = '/profile' element={<ProfilePage/>}/>
               <Route path = '/profile/:id' element={<PhotoCardPage/>}/>
               <Route path = '/setting' element={<SettingPage/>}/>
               <Route path = '*' element={<HomePage/>}/>
           </Route>
        </Routes>

        </div>
    );
}

export default App;
