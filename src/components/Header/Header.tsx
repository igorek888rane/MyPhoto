import React, {FC} from 'react';
import logo from '../../assets/img/logo.png'
import styles from './Header.module.scss'
import MyButton from "../UI/MyButton/MyButton";

const Header:FC = () => {
    return (
        <header className={styles.header}>
           <div className={styles.logo}>
               <img  src={logo} alt=""/>
               <span>INST</span>
           </div>
            <div className={styles.button}>
                <MyButton>
                   Login
                </MyButton>
                <MyButton>
                  Registration
                </MyButton>
            </div>
        </header>
    );
};

export default Header;