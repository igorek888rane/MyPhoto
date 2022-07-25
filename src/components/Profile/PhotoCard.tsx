import React, {FC} from 'react';
import styles from './Profile.module.scss'
import {IPhotoCard} from "../../@types/types";

interface PhotoItemProps {
    photo:IPhotoCard
}

const PhotoCard :FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={styles.photo_card}>
            <div className={styles.photo}>
                <img src={photo.photoUrl} alt=""/>
            </div>
        </div>
    );
};

export default PhotoCard;