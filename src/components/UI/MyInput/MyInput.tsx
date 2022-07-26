import React, {FC} from 'react';
import styles from './MyInput.module.scss'


interface InputProps {
    type?:string;
    placeholder?:string;
}

const MyInput: FC<InputProps> = (props) => {
    return (
        <input className={styles.input} {...props}/>
    );
};

export default MyInput;