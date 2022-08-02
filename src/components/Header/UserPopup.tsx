import React, {FC, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import {useSelector} from "react-redux";
import {logout, userSelector} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";

type BodyClick = MouseEvent & {
    path: Node[]
}

const UserPopup: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const {data} = useSelector(userSelector)
    const dispatch = useAppDispatch()
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


    const exit = () => {
        dispatch(logout())
    }
    return (
        <div ref={popupRef} onClick={() => setOpen(!open)} className={styles.user_popup}>
            <div className={styles.avatar}>
                <img
                    src={data?.userAvatar || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                    alt=""/>
            </div>
            {open && <div className={styles.popup}>
                <ul>
                    <Link to={'/profile'}>
                        <li>Профиль</li>
                    </Link>
                    <Link to={'/setting'}>
                        <li>Настройки</li>
                    </Link>
                    <li onClick={exit}>Выход</li>
                </ul>
            </div>}

        </div>
    );
};

export default UserPopup;