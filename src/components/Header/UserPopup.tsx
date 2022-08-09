import React, {FC, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import {useSelector} from "react-redux";
import {logout, authSelector} from "../../redux/slices/authSlice";
import {useAppDispatch} from "../../redux/store";
import {fetchUser} from "../../redux/slices/userSlice";
import {closeClick, closeEsc} from "../../utils/popupClose";



const UserPopup: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)
    const {data} = useSelector(authSelector)
    const dispatch = useAppDispatch()
    document.body.onclick = (e: MouseEvent) => {
        closeClick({e, setOpen, popupRef})
    }
    document.onkeydown = (e: KeyboardEvent) => {
        closeEsc({e, setOpen})
    }


    const exit = () => {
        if(window.confirm('Вы дейстительно хотите выйти?')) dispatch(logout())

    }
    return (
        <div ref={popupRef} onClick={() => setOpen(!open)} className={styles.user_popup}>
            <div className={styles.avatar}>
                <img
                    src={data?.userAvatar?
                        `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${data?.userAvatar}`
                        :'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                    alt=""/>
            </div>
            {open && <div className={styles.popup}>
                <ul>
                    <Link to={`/profile/${data?.userName}`}>
                        <li onClick={()=>{ dispatch(fetchUser(data?.userName))}}>Профиль</li>
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