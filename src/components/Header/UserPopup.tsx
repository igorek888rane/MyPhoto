import React, {FC, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/userSlice";

type BodyClick = MouseEvent & {
    path: Node[]
}

const UserPopup: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const {userAvatar} = useSelector(userSelector)

    document.body.onclick = (e: MouseEvent) => {
        const _e = e as BodyClick
        if (popupRef.current && !_e.path.includes(popupRef.current)) {
            setOpen(false)
            document.body.onclick = null
        }

    }
    document.onkeydown = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
            setOpen(false)
            document.onkeydown = null
        }

    }


    return (
        <div ref={popupRef} onClick={() => setOpen(!open)} className={styles.user_popup}>
            <div className={styles.avatar}>
                <img
                    src={userAvatar || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                    alt=""/>
            </div>
            {open && <div className={styles.popup}>
                <ul>
                    <Link to={'/profile'}>
                        <li>Profile</li>
                    </Link>
                    <Link to={'/setting'}>
                        <li>Setting</li>
                    </Link>
                    <li>Exit</li>
                </ul>
            </div>}

        </div>
    );
};

export default UserPopup;