import React, {FC} from 'react';
import styles from "./PhotoCardByHome.module.scss";
import {Link} from "react-router-dom";
import {IUser} from '../../@types/types';

type HeaderProps = {
    user:IUser | undefined

}

const Header:FC<HeaderProps> = ({user}) => {
    return (
        <div  className={styles.header}>
            <Link to={`/profile/${user?.userName}`}>
                <div className={styles.avatar}>
                    <img
                        src={user?.userAvatar ?
                            `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                            : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                        alt=""/>
                </div>
            </Link>
            <div className={styles.info}>
                <div><span>{user?.userName}</span></div>
            </div>

        </div>
    );
};

export default Header;