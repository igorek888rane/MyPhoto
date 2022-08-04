import React, {ChangeEvent, FC, FormEvent, useRef, useState} from 'react';
import styles from './AddPhoto.module.scss'
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch} from "../../redux/store";
import {createPhotoCard, photoSelector} from "../../redux/slices/photoCardsSlice";
import {useSelector} from "react-redux";
import {modalHandler} from "../../utils/modalHandler";

const AddPhoto: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [text, setText] = useState<string>('')

    const [photoUrl, setPhoto] = useState<any>()

    const dispatch = useAppDispatch()
    const {statusCreate} = useSelector(photoSelector)

    const submitHandler = async () => {

        let data = new FormData()
        data.append('description', text)
        data.append('photoUrl', photoUrl)
        await dispatch(createPhotoCard(data))
        modalHandler({active: false, body: null}, dispatch)

    }
    const onChange = (e: any) => {
        setPhoto(e.target.files[0])
    }

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className={styles.add_photo}>
            {photoUrl?.name}
            <div className={styles.loading} onClick={() => inputRef.current?.click()}>
                <span>Загрузить фото</span>

            </div>

            <div className={styles.text}>
               <textarea
                   value={text}
                   onChange={((e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value))}/>
            </div>
            <input
                ref={inputRef}
                type="file" hidden
                onChange={onChange}/>
            <MyButton onClick={submitHandler} type={'submit'}>Отправить</MyButton>
            {statusCreate === 'loading' && <div>Загрузка...</div>}

        </form>
    );
};

export default AddPhoto;