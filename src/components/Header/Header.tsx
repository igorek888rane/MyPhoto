import React, {FC} from 'react';
import logo from '../../assets/img/logo.png'
import styles from './Header.module.scss'
import MyButton from "../UI/MyButton/MyButton";

const Header: FC = () => {
    const auth:boolean = true
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
                <span>INST</span>
            </div>
            <div className={styles.button}>
                {auth
                    ? <MyButton>Log Out</MyButton>
                    : (
                        <>
                            <MyButton>Login</MyButton>
                            <MyButton>Login</MyButton>
                        </>)}
            </div>
        </header>
    );
};

export default Header;