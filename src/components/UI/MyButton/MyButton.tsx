import React, {FC, PropsWithChildren} from 'react';
import styles from "./MyButton.module.scss";


interface ButtonProps {
    type?:'submit';
}

const MyButton:FC<PropsWithChildren<ButtonProps>> = ({type,children}) => {
    return (
        <button type={type} className={styles.btn}>
            {children}
        </button>
    );
};

export default MyButton;