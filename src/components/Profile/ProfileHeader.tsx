import React from 'react';
import styles from './Profile.module.scss'
import MyButton from "../UI/MyButton/MyButton";

import edit from '../../assets/img/Vector .png'

const ProfileHeader = () => {
    return (
        <div className={styles.header} >
            <div className={styles.info_block}>
                <div className={styles.avatar}>
                    <img
                        src="https://sun2.userapi.com/sun2-12/s/v1/ig2/EPTNS_1Xtu-2vqG10GGpqOP6-5zzC82cHWt8V_T3BVzOO8LuMCKm8RcwlXKfagZ4SqePpt449XOhTAqusyXd2eXW.jpg?size=200x200&quality=95&crop=13,258,1535,1535&ava=1"
                        alt=""/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h1>Igor Tsuker</h1>
                        <h2>Student</h2>
                    </div>
                    <div className={styles.edit}>

                        <img src={edit} alt=""/>

                    </div>
                </div>
            </div>
            <div className={styles.btn}>
                <MyButton>
                    <span>+</span>
                </MyButton>
            </div>
        </div>
    );
};

export default ProfileHeader;