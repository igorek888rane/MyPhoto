import React, {FC, useEffect} from 'react';
import styles from './Profile.module.scss'
import ProfileHeader from "./ProfileHeader";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {fetchPhotoCards, photoSelector} from "../../redux/slices/photoCardsSlice";
import {fetchUser, userSelector} from "../../redux/slices/userSlice";
import {useParams} from "react-router-dom";
import {authSelector} from "../../redux/slices/authSlice";


const Profile: FC = () => {


    const {user} = useSelector(userSelector)
    const {data} = useSelector(authSelector)
    const {status, photoCards} = useSelector(photoSelector)
    const dispatch = useAppDispatch()
    const params = useParams()

    useEffect(() => {
        const userName = String(params.userName)
        dispatch(fetchUser(userName))
    }, [data,dispatch,params])
    useEffect(() => {
        const userId = String(user?._id)
        dispatch(fetchPhotoCards(userId))

    }, [user, data,dispatch])

    return (
        <>
            <ProfileHeader/>
            {photoCards.length
                ? <div className={styles.photo_cards}>
                    {status === 'loading' ?
                        [...new Array(3)].map((_, i) => <PhotoCardSkeleton key={i}/>)
                        : photoCards.map(photo => <PhotoCard key={photo._id} photo={photo}/>)}
                </div>
                : <div className={styles.not_found_block}>
                    <h1>Нет Публикаций</h1>
                </div>}
        </>
    );
};

export default Profile;


