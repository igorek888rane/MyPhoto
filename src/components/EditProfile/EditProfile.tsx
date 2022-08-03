import React, {ChangeEvent, FC, useState} from 'react';
import styles from './EditProfile.module.scss';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {authSelector, updateUserInfo} from "../../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {modalHandler} from "../../utils/modalHandler";


type inputType = {
    name: string,
    status: string,
}

const EditProfile: FC = () => {
    const {data, statusUpdate} = useSelector(authSelector)
    const [input, setInput] = useState<inputType>({name: `${data?.userName}`, status: `${data?.userStatus}`})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const editUser = async () => {

        const userId = String(data?._id)
        const params = {
            userName: input.name,
            userStatus: input.status,
        }
         dispatch(updateUserInfo({id: userId, params}))

        navigate(`/profile/${input.name}`)
        modalHandler({active: false, body: null}, dispatch)
    }


    // if(statusUpdate === 'success'){
    //     navigate(`/profile/${input.name}`)
    //     modalHandler({active: false, body: null}, dispatch)
    // }
    return (
        <div className={styles.edit__profile}>
            <h1>Редактировать профиль</h1>
            <div className={styles.input}>

                <MyInput type={'text'}
                         placeholder={'Введите имя пользователя...'}
                         value={input.name}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setInput({
                             name: e.target.value,
                             status: input.status
                         })}/>
                <MyInput type={'text'}
                         placeholder={'Введите статус...'}
                         value={input.status}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setInput({
                             name: input.name,
                             status: e.target.value
                         })}/>
            </div>
            {statusUpdate === 'loading' ? <span>Загрузка...</span> :
                <MyButton onClick={editUser}>Редактировать </MyButton>}
        </div>
    );
};

export default EditProfile;