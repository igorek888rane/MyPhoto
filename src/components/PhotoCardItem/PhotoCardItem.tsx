import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import styles from './PhotoCardItem.module.scss';
import {fetchUser, userSelector} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {fetchOnePhotoCard, photoSelector} from "../../redux/slices/photoCardsSlice";
import {authSelector} from "../../redux/slices/authSlice";
import Header from "./Header";
import Description from "./Description";
import Photo from "./Photo";


const PhotoCardItem: FC = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {user} = useSelector(userSelector)
    const {data} = useSelector(authSelector)
    const {photoCard, statusUpdate} = useSelector(photoSelector)


    useEffect(() => {
        dispatch(fetchUser(String(params.userName)))
        dispatch(fetchOnePhotoCard(String(params.id)))
    }, [statusUpdate, dispatch, params])


    return (
        <div className={styles.photoCard}>
            <Header photoCard={photoCard} data={data} user={user}/>
            <Photo photoCard={photoCard}/>
            <Description photoCard={photoCard} data={data} user={user}/>
        </div>
    );
};

export default PhotoCardItem;

