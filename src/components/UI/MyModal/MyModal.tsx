import React, {FC, PropsWithChildren} from 'react';
import styles from './MyModal.module.scss'
import {useSelector} from "react-redux";
import {modalSelector} from "../../../redux/slices/modalSlice";
import {useAppDispatch} from "../../../redux/store";
import {modalHandler} from "../../../utils/modalHandler";


const MyModal: FC<PropsWithChildren> = ({children}) => {

    const dispatch = useAppDispatch()
    const {active} = useSelector(modalSelector)

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={()=>modalHandler({active:false,body:null},dispatch)}>
            <div className={active ? `${styles.modal__content} ${styles.active}` : styles.modal__content}
                 onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
                <div className={styles.close} onClick={()=>modalHandler({active:false,body:null},dispatch)}>
                    <svg height="512px" id="Layer_1" version="1.1"
                         viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
                        c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
                          c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MyModal;