import React, {ChangeEvent, FC} from 'react';
import styles from './MyInput.module.scss'


interface InputProps {
    type?:string;
    placeholder?:string;
    name?:'password'|'email'|'userName'|'confirmPassword';
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void;
    onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void
    value?:string;
}

const MyInput: FC<InputProps> = (props) => {
    return (
        <input className={styles.input} {...props}/>
    );
};

export default MyInput;