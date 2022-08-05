import React, {ChangeEvent, FC, useState} from 'react';
import styles from './EditPhoto.module.scss';
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch} from "../../redux/store";
import {photoSelector, updatePhoto} from "../../redux/slices/photoCardsSlice";
import {useSelector} from "react-redux";
import {modalHandler} from "../../utils/modalHandler";

type  editPhotoProps = {
    description: string
    id: string
}

const EditPhoto: FC<editPhotoProps> = ({description, id}) => {
    const [text, setText] = useState<string>(description)
    const dispatch = useAppDispatch()
    const {statusUpdate} = useSelector(photoSelector)

    const update = async () => {
        const params = {description: text}
        await dispatch(updatePhoto({id, params}))
        modalHandler({active: false, body: null}, dispatch)
    }
    return (
        <div className={styles.edit_photo}>
            <div className={styles.text}>
               <textarea
                   placeholder={'Описание...'}
                   value={text}
                   onChange={((e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value))}/>

            </div>
            <div className={styles.btn}>
                <div className={styles.send}>
                    <MyButton onClick={update} type={'submit'}>Отправить</MyButton>
                </div>
                <div onClick={() => setText('')} className={styles.clear}>
                    <span>Очистить</span>
                </div>
            </div>
            {statusUpdate === 'loading' && <div>Загрузка...</div>}
        </div>
    );
};

export default EditPhoto;