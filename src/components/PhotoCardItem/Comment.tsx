import React, {FC} from 'react';
import styles from './PhotoCardItem.module.scss';




const Comment:FC = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.comment_avatar}>
                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default Comment;