import React, {FC} from 'react';
import styles from './EditProfile.module.scss';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const EditProfile: FC = () => {
    return (
        <div className={styles.edit__profile}>
            <h1>Редактировать профиль</h1>
            <div className={styles.input}>
                <MyInput type={'text'}
                         placeholder={'Введите имя пользователя...'}/>
                <MyInput type={'text'}
                         placeholder={'Введите статус...'}/>
            </div>

            <MyButton>Редактировать </MyButton>
        </div>
    );
};

export default EditProfile;