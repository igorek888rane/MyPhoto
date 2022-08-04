import React, {FC, useRef} from 'react';
import styles from './EditAvatar.module.scss';
import {useAppDispatch} from "../../redux/store";
import {authSelector, updateAvatar} from "../../redux/slices/authSlice";
import {useSelector} from "react-redux";
import {modalHandler} from "../../utils/modalHandler";


const EditAvatar: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const {data, statusUpdate} = useSelector(authSelector)
    const userId = String(data?._id)

    const onChange = async (e: any) => {
        const userAvatar = e.target.files[0]
        let formData = new FormData()
        formData.append('userAvatar', userAvatar)
       await dispatch(updateAvatar({id: userId, userAvatar: formData}))
        if(statusUpdate==='success'){
            modalHandler({active: false, body: null}, dispatch)
        }
    }
    const removeAvatar = async() => {
        window.confirm('Вы хотите удалить аватар?')
       await dispatch(updateAvatar({id: userId}))
       if(statusUpdate==='success'){
           modalHandler({active: false, body: null}, dispatch)
       }
    }
    return (
        <div className={styles.edit_photo}>
            <div className={styles.loading} onClick={() => inputRef.current?.click()}>
                <span>Загрузить фото</span>
            </div>
            <div className={styles.delete} onClick={removeAvatar}>
                <span>Удалить фото </span>
            </div>
            <input
                onChange={onChange}
                ref={inputRef}
                type="file" hidden/>
            {statusUpdate==='loading'&&<span>Загрузка...</span>}
        </div>
    );
};

export default EditAvatar;