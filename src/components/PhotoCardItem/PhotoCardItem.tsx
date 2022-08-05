import React, {FC, useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Moment from "react-moment";
import moment from 'moment'
import styles from './PhotoCardItem.module.scss';
import {fetchUser, userSelector} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {deletePhoto, fetchOnePhotoCard, photoSelector} from "../../redux/slices/photoCardsSlice";
import {authSelector} from "../../redux/slices/authSlice";
import {modalHandler} from "../../utils/modalHandler";
import EditPhoto from "../EditPhoto/EditPhoto";


type BodyClick = MouseEvent & {
    path: Node[]
}

const PhotoCardItem: FC = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(userSelector)
    const {data} = useSelector(authSelector)
    const {photoCard,statusUpdate} = useSelector(photoSelector)


    useEffect(() => {
        dispatch(fetchUser(String(params.userName)))
        dispatch(fetchOnePhotoCard(String(params.id)))
    }, [statusUpdate,dispatch, params])

    let later = moment(photoCard?.createdAt).fromNow()
    const [open, setOpen] = useState<boolean>(false)

    const popupRef = useRef<HTMLDivElement>(null)
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

    const removePhoto = () => {
        window.confirm('Вы действительно хотите удалить фото?')
        const id = String(params.id)
        dispatch(deletePhoto(id))
        navigate(`/profile/${data?.userName}`)
    }
    return (
        <div className={styles.photoCard}>
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
                    <div><span className={styles.time}>{later}</span></div>
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
                                <li onClick={()=>modalHandler({active:true,body:<EditPhoto description={String(photoCard?.description)} id={String(photoCard?._id)}/>},dispatch)}>Редактировать</li>
                                <li style={{color: "red"}} onClick={removePhoto}>Удалить</li>
                            </ul>
                        </div>}
                    </div>}

            </div>
            <div className={styles.photo}>
                <img src={`${process.env.REACT_APP_SERVER_API}/uploads/PhotoCard/${photoCard?.photoUrl}`} alt=""/>
            </div>
            <div className={styles.description}>
                <div className={styles.comments}>
                    {photoCard?.description && <div className={styles.comment_block}>
                        <div className={styles.comment_avatar}>
                            <Link to={`/profile/${user?.userName}`}>
                                <img
                                    src={user?.userAvatar ?
                                        `${process.env.REACT_APP_SERVER_API}/uploads/userAvatar/${user?.userAvatar}`
                                        : 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                                    alt=""/></Link>
                        </div>
                        <div className={styles.comment_text}>
                            <p><span>{user?.userName}</span>:{photoCard?.description}</p>
                        </div>
                    </div>}
                </div>
                <div className={styles.like}>

                  <div className={styles.icon}>
                      <svg
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="info"/>
                          <g id="icons">
                              <path d="M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5
                                  C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z"
                                    id="like"/>
                          </g>
                      </svg>
                  </div>
                    <div className={styles.count}>
                        <span> {photoCard?.likes}</span>
                    </div>
                </div>
                <div className={styles.block_bottom}>

                    <div className={styles.text}>

                        <div>
                            <textarea placeholder={'Введите коментарий '}/>
                        </div>
                        <div className={styles.send}>
                            <svg height="18px" version="1.1" viewBox="0 0 23 18" width="23px"
                                 xmlns="http://www.w3.org/2000/svg"
                            ><title/>
                                <desc/>
                                <defs/>
                                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                                    <g fill="#000000" id="Core" transform="translate(-421.000000, -381.000000)">
                                        <g id="send" transform="translate(421.500000, 381.000000)">
                                            <path d="M0,18 L21,9 L0,0 L0,7 L15,9 L0,11 L0,18 Z" id="Shape"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PhotoCardItem;

