import React from 'react';
import styles from './Profile.module.scss'
import MyButton from "../UI/MyButton/MyButton";


const ProfileHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.info_block}>
                <div className={styles.avatar}>
                    <img
                        src="https://sun2.userapi.com/sun2-12/s/v1/ig2/EPTNS_1Xtu-2vqG10GGpqOP6-5zzC82cHWt8V_T3BVzOO8LuMCKm8RcwlXKfagZ4SqePpt449XOhTAqusyXd2eXW.jpg?size=200x200&quality=95&crop=13,258,1535,1535&ava=1"
                        alt=""/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h1>Tsuker26</h1>
                        <h2>Student</h2>
                    </div>
                    <div className={styles.edit}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4
                            4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"/>
                            <path
                                d="M7 14.987v1.999h1.999l5.529-5.522-1.998-1.998zm8.47-4.465-1.998-2L14.995 7l2 1.999z"/>
                        </svg>
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