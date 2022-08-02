import React from 'react';
import {Link} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className={'container'}>
        <h1 style={{textAlign:'center',marginTop:'50px'}}>Добро пожаловать!</h1>
            <h2 style={{textAlign:'center',marginTop:'5px' }}><Link to = '/login'>Войдите</Link> или <Link to={'register'}>зарегестрируйтесь</Link></h2>
        </div>
    );
};

export default WelcomePage;