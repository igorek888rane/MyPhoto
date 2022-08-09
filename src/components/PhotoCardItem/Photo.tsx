import React, {FC} from 'react';
import styles from "./PhotoCardItem.module.scss";
import {IPhotoCard} from "../../@types/types";

type PhotoProps = {
    photoCard:IPhotoCard | null,
}

const Photo :FC<PhotoProps> = ({photoCard}) => {
    return (
        <div className={styles.photo}>
            <img src={`${process.env.REACT_APP_SERVER_API}/uploads/PhotoCard/${photoCard?.photoUrl}`} alt=""/>
        </div>
    );
};

export default Photo;