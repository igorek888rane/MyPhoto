import React, {FC, PropsWithChildren} from 'react';
import styles from "./MyButton.module.scss";


interface ButtonProps {
    type?:'submit';
    onClick?:()=>void
}

const MyButton:FC<PropsWithChildren<ButtonProps>> = ({type,onClick,children}) => {
    return (
        <button onClick={onClick} type={type} className={styles.btn}>
            {children}
        </button>
    );
};

export default MyButton;