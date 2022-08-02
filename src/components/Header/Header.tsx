import React, {FC} from 'react';
import styles from './Header.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import UserPopup from "./UserPopup";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../../redux/slices/userSlice";

const Header: FC = () => {
    const auth = useSelector(authSelector)
    return (
        <header className={styles.header}>
            <div className={`${styles.header_container} container`}>
                <Link to='/'>
                    <div className={styles.logo}>
                        <svg viewBox="0 0 32 32">
                            <path
                                d="M12,23h5a1,1,0,0,0,1-1V19A5,5,0,0,0,18,9H12a1,1,0,0,0-1,1V22A1,1,0,0,0,12,23Zm1-12h5a3,3,0,0,1,0,6H17a1,1,0,0,0-1,1v3H13Z"/>
                            <path
                                d="M23.2,3H13.6a1,1,0,0,0,0,2h9.6A3.8,3.8,0,0,1,27,8.8V23.2A3.8,3.8,0,0,1,23.2,27H8.8A3.8,3.8,0,0,1,5,23.2V8.8A3.8,3.8,0,0,1,8.8,5a1,1,0,0,0,0-2A5.8,5.8,0,0,0,3,8.8V23.2A5.8,5.8,0,0,0,8.8,29H23.2A5.8,5.8,0,0,0,29,23.2V8.8A5.8,5.8,0,0,0,23.2,3Z"/>
                        </svg>
                        <span>MyPhoto</span>
                    </div>
                </Link>


                {
                    auth ?
                        <UserPopup/>
                        :
                        <div className={styles.button}>
                            <Link to={'/login'}> <MyButton>Вход</MyButton></Link>
                            <Link to={'/register'}><MyButton>Регистрация</MyButton></Link>
                        </div>

                }

            </div>
        </header>
    );
};

export default Header;