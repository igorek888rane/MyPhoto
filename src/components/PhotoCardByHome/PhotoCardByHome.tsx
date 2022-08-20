import React, {FC, useEffect, useRef, useState} from 'react';
import Header from "./Header";
import Comments from "../PhotoCardItem/Comments";
import {Link} from "react-router-dom";
import {IPhotoCard} from "../../@types/types";
import styles from "./PhotoCardByHome.module.scss";
import {useAppDispatch} from "../../redux/store";
import {fetchAllUsers, userSelector} from "../../redux/slices/userSlice";
import {useSelector} from "react-redux";
import {authSelector} from "../../redux/slices/authSlice";
import {addLike, likeFinder} from '../../utils/like';


type PhotoCardByHomeProps = {
    photoCard: IPhotoCard
}

const PhotoCardByHome: FC<PhotoCardByHomeProps> = ({photoCard}) => {

    const [more, setMore] = useState<boolean>(false)
    const [openComment, setOpenComment] = useState<boolean>(false)
    const headerRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const {users} = useSelector(userSelector)
    let user = users.find(u => u._id === photoCard.user)
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])


    const {data} = useSelector(authSelector)
    const likeFind = likeFinder(data, photoCard)

    // const collapse = (ref: RefObject<HTMLDivElement>, b: boolean) => {
    //     const to = Number(ref?.current?.scrollHeight)
    //     console.log(to);
    //     window.scrollTo(0, to)
    //     setMore(b)
    // }

    return (
        <div className={styles.photoCard}>
            {openComment
                ?
                <Comments photoCard={photoCard} data={data} user={user} back={openComment} setBack={setOpenComment}/>
                : <>
                    <Header user={user}/>
                    <Link to={`/profile/${user?.userName}/${photoCard._id}`}>
                        <div className={styles.photo}>
                            <img src={`${process.env.REACT_APP_SERVER_API}/uploads/PhotoCard/${photoCard?.photoUrl}`}
                                 alt=""/>
                        </div>
                    </Link>


                    <div className={styles.description}>

                        <div className={styles.like_comment}>
                            <div className={styles.like}>
                                <div className={likeFind ? styles.icon_red : styles.icon}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="info"/>
                                        <g id="icons">
                                            <path
                                                onClick={() => likeFind
                                                    ? addLike(-1, false, photoCard, dispatch)
                                                    : addLike(1, true, photoCard, dispatch)}
                                                d="M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5
                                  C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z"
                                                id="like"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className={styles.count}>
                                    <span>{photoCard?.likes}</span>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <div className={styles.icon}
                                >
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path onClick={() => setOpenComment(true)}
                                              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8
                            480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
                                    </svg>
                                </div>
                                <div className={styles.count}>
                                    <span>{photoCard?.comments.length}</span>
                                </div>


                            </div>
                        </div>
                        {photoCard.description && <div className={styles.description_block}>
                            <div className={styles.description_text}>
                                {photoCard?.description.length > 50
                                    ? <p>
                                        <span>{user?.userName}</span>: {more ? photoCard.description : photoCard.description.substring(0, 150)}
                                        {more ?
                                            <span className={styles.more}
                                                  onClick={() => setMore(false)}>  ...свернуть</span> :
                                            <span className={styles.more} onClick={() => setMore(true)}>... еще</span>}
                                    </p>
                                    : <p>
                                        <span>{user?.userName}</span>: {photoCard.description}
                                    </p>}
                            </div>
                        </div>}
                    </div>
                </>}

        </div>
    );
};

export default PhotoCardByHome;






