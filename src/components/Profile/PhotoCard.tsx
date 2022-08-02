import React, {FC} from 'react';
import styles from './Profile.module.scss'
import {IPhotoCard} from "../../@types/types";

type PhotoItemProps = {
    photo: IPhotoCard
}

const PhotoCard: FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={styles.photo_card}>
            <div className={styles.info_card}>
                <div className={styles.likes}>
                    <div>
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
                    <div><span>{photo.likes}</span></div>
                </div>
                <div className={styles.comments}>
                    <div>
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8
                            480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
                        </svg>
                    </div>
                    <div>
                        <span>{photo.comments.length}</span>
                    </div>
                </div>
            </div>
            <div className={styles.photo}>
                <img src={photo.photoUrl} alt=""/>
            </div>
        </div>
    );
};

export default PhotoCard;