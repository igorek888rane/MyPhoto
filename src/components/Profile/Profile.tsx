import React, {FC, useEffect, useState} from 'react';
import styles from './Profile.module.scss'
import ProfileHeader from "./ProfileHeader";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";
import {useSelector} from "react-redux";
import {userSelector} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";


const Profile: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {data} = useSelector(userSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {


    }, [dispatch])
    return (
        <>
            <ProfileHeader/>
            {data?.photoCards.length
                ? <div className={styles.photo_cards}>
                    {isLoading ?
                        [...new Array(3)].map((_, i) => <PhotoCardSkeleton key={i}/>)
                        : data?.photoCards.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
                </div>
                : <div className={styles.not_found_block}>
                    <h1>Нет Публикаций</h1>
                </div>}
        </>
    );
};

export default Profile;


