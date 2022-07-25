import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";

const UserPopup: FC = () => {
    const open:boolean = true
    return (
        <div className={styles.user_popup}>
            <div className={styles.avatar}>
                <img
                    src="https://sun2.userapi.com/sun2-12/s/v1/ig2/EPTNS_1Xtu-2vqG10GGpqOP6-5zzC82cHWt8V_T3BVzOO8LuMCKm8RcwlXKfagZ4SqePpt449XOhTAqusyXd2eXW.jpg?size=200x200&quality=95&crop=13,258,1535,1535&ava=1"
                    alt=""/>
            </div>
            {open&&<div className={styles.popup}>
                <ul>
                    <Link to={'/profile'}><li>Profile </li></Link>
                    <li>Exit</li>
                </ul>
            </div>}

        </div>
    );
};

export default UserPopup;