import React, {FC, useRef} from 'react';
import styles from './EditPhoto.module.scss';

const EditPhoto: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className={styles.edit_photo}>
            <div className={styles.loading} onClick={()=>inputRef.current?.click()}>
                <span>Загрузить фото</span>
            </div>
            <div className={styles.delete}>
                <span>Удалить фото </span>
            </div>
            <input ref={inputRef} type="file" hidden/>
        </div>
    );
};

export default EditPhoto;