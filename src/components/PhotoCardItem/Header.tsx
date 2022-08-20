import React, {FC, useRef, useState} from 'react';
import styles from "./PhotoCardItem.module.scss";
import {Link, useNavigate, useParams} from "react-router-dom";
import Moment from "react-moment";
import {modalHandler} from "../../utils/modalHandler";
import EditPhoto from "../EditPhoto/EditPhoto";
import {deletePhoto} from "../../redux/slices/photoCardsSlice";
import moment from "moment";
import {useAppDispatch} from "../../redux/store";
import {HeaderAndCommentsProps} from "../../@types/PropsType";
import {closeClick, closeEsc} from "../../utils/popupClose";


const Header: FC<HeaderAndCommentsProps> = ({photoCard, data, user}) => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)
    const popupRef = useRef<HTMLDivElement>(null)
    document.body.onclick = (e: MouseEvent) => {
        closeClick({e, setOpen, popupRef})
    }
    document.onkeydown = (e: KeyboardEvent) => {
        closeEsc({e, setOpen})
    }


    const removePhoto = () => {
        if (window.confirm('Вы действительно хотите удалить фото?')) {
            const id = String(params.id)
            dispatch(deletePhoto(id))
            navigate(`/profile/${data?.userName}`)
        }

    }
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>
                <Link to={`/profile/${user?.userName}`}> <img
                    src={user?.userAvatar ?
                        `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                        : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                    alt=""/></Link>
            </div>
            <div className={styles.info}>
                <div><span>{user?.userName}</span></div>
                <div><span><Moment date={photoCard?.createdAt} format={'D MMM YYYY '}/></span></div>
                <div><span className={styles.time}>{moment(photoCard?.createdAt).fromNow()}</span></div>
            </div>
            {user?._id === data?._id &&
                <div ref={popupRef} onClick={() => setOpen(!open)} className={styles.options}>
                    <svg enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
                              id="XMLID_287_"/>
                        <path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z"
                              id="XMLID_289_"/>
                        <path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z"
                              id="XMLID_291_"/>
                    </svg>
                    {open && <div className={styles.popup}>
                        <ul>
                            <li onClick={() => modalHandler({
                                    active: true,
                                    body: <EditPhoto
                                        description={String(photoCard?.description)}
                                        id={String(photoCard?._id)}/>},
                                        dispatch)}>Редактировать</li>
                            <li style={{color: "red"}} onClick={removePhoto}>Удалить</li>
                        </ul>
                    </div>}
                </div>}

        </div>
    );
};

export default Header;