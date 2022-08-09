import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {IPhotoCard} from "../../@types/types";
import styles from "./PhotoCardByHome.module.scss";
import {useAppDispatch} from "../../redux/store";
import {fetchAllUsers, userSelector} from "../../redux/slices/userSlice";
import {useSelector} from "react-redux";
import {updatePhoto} from "../../redux/slices/photoCardsSlice";
import {authSelector, deleteLike, updateLike} from "../../redux/slices/authSlice";


type PhotoCardByHomeProps = {
    photoCard: IPhotoCard
}

const PhotoCardByHome: FC<PhotoCardByHomeProps> = ({photoCard}) => {

    const [more, setMore] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {users} = useSelector(userSelector)
    const user = users.find(u => u._id === photoCard.user)
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const {data} = useSelector(authSelector)

    const likeFind = data?.likes.find(l => l === photoCard?._id)

    const addLike = async (count: number, like: boolean) => {
        const params = {likes: count}
        const id = String(photoCard?._id)
        dispatch(updatePhoto({id, params}))
        like
            ? dispatch(updateLike(id))
            : dispatch(deleteLike(id))
    }


    return (
        <div className={styles.photoCard}>

            <div className={styles.header}>
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

            <Link to={`/profile/${user?.userName}/${photoCard._id}`}>
                <div className={styles.photo}>
                    <img src={`${process.env.REACT_APP_SERVER_API}/uploads/PhotoCard/${photoCard?.photoUrl}`} alt=""/>
                </div>
            </Link>


            <div className={styles.description}>

                <div className={styles.like}>
                    <div className={likeFind ? styles.icon_red : styles.icon}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="info"/>
                            <g id="icons">
                                <path onClick={() => likeFind ? addLike(-1, false) : addLike(1, true)}
                                      d="M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5
                                  C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z"
                                      id="like"/>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.count}>
                        <span> {photoCard?.likes}</span>
                    </div>

                </div>
                {photoCard.description && <div className={styles.description_block}>
                    <div className={styles.comment_text}>
                        {photoCard?.description.length > 50
                            ? <p>
                                <span>{user?.userName}</span>: {more ? photoCard.description : photoCard.description.substring(0, 150)}
                                {more ?
                                    <span className={styles.more} onClick={() => setMore(false)}>  ...свернуть</span> :
                                    <span className={styles.more} onClick={() => setMore(true)}>... еще</span>}
                            </p>
                            : <p>
                                <span>{user?.userName}</span>: {photoCard.description}
                            </p>}
                    </div>
                </div>}
            </div>

        </div>
    );
};

export default PhotoCardByHome;






