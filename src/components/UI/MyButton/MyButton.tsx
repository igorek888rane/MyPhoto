import React, {FC, PropsWithChildren} from 'react';
import styles from "./MyButton.module.scss";

const MyButton:FC<PropsWithChildren>= ({children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    );
};

export default MyButton;