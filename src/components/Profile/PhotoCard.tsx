import React, {FC} from 'react';
import styles from './Profile.module.scss'
import {IPhotoCard} from "../../@types/types";

import like from '../../assets/img/Like-icon.png'

interface PhotoItemProps {
    photo:IPhotoCard
}

const PhotoCard :FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={styles.photo_card}>
            <div className={styles.photo}>
                <img src={photo.photoUrl} alt=""/>
            </div>
            <div className={styles.under_photo}>
                <div className={styles.title}>
                    <span>{photo.title}</span>
                </div>
                <div className={styles.count}>
                    <img src={like} alt=""/>
                    <div>{photo.count}</div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;