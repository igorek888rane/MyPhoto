import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.scss';
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";


function App() {
    return (
        <div className="App">
        <Routes>
           <Route path='/' element={<Layout/>}>
               <Route path = '' element={<ProfilePage/>}/>
               <Route path = 'HomePage' element={<HomePage/>}/>
               <Route path = '*' element={<HomePage/>}/>
           </Route>
        </Routes>
        </div>
    );
}

export default App;
