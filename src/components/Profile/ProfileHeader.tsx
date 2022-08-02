import React from 'react';
import styles from './Profile.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch} from "../../redux/store";
import EditPhoto from "../EditPhoto/EditPhoto";
import EditProfile from "../EditProfile/EditProfile";
import {useSelector} from "react-redux";
import {modalHandler} from "../../utils/modalHandler";
import {userSelector} from "../../redux/slices/userSlice";
import {authSelector} from "../../redux/slices/authSlice";


const ProfileHeader = () => {
    const dispatch = useAppDispatch()
    const {user} = useSelector(userSelector)
    const {data} = useSelector(authSelector)
    return (
        <div className={styles.header}>
            <div className={styles.info_block}>
                <div className={styles.avatar}
                     onClick={() => modalHandler({active: true, body: <EditPhoto/>}, dispatch)}>
                    <img
                        src={user?.userAvatar ?
                            `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                            : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                        alt=""/>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h1>{user?.userName}</h1>
                        <h2>{user?.userStatus}</h2>
                    </div>
                    {data?._id === user?._id && <div className={styles.edit}
                                                     onClick={() => modalHandler({
                                                         active: true,
                                                         body: <EditProfile/>
                                                     }, dispatch)}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4
                            4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"/>
                            <path
                                d="M7 14.987v1.999h1.999l5.529-5.522-1.998-1.998zm8.47-4.465-1.998-2L14.995 7l2 1.999z"/>
                        </svg>
                    </div>}
                </div>
            </div>
            {data?._id === user?._id &&
                <div className={styles.btn} onClick={() => modalHandler({active: true, body: null}, dispatch)}>
                    <MyButton>
                        <span>+</span>
                    </MyButton>
                </div>}

        </div>
    );
};

export default ProfileHeader;