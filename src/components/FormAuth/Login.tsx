import React, {FC} from 'react';
import {FormValues} from "../../@types/types";
import styles from "./Form.module.scss";
import {Formik, FormikErrors} from "formik";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {authUser} from "../../redux/slices/authSlice";
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";


const Login:FC = () => {
    const initialValues: FormValues = {userName: '', password: '123123978aA'}
    const dispatch = useAppDispatch()
    const status = useSelector((state:RootState )=> state.auth.status)

    return (
        <div className={styles.form_block}>
            <h1>Вход</h1>
            <Formik
                initialValues={initialValues}

                validate={values => {
                    const errors: FormikErrors<FormValues> = {};
                    if(!values.userName){
                        errors.userName = 'Обязательное поле'
                    }else if(values.userName.length<3||values.userName.length>16){
                        errors.userName = 'Должно быть больше трех и меньше 16 символов '
                    }
                    if (!values.password) {
                        errors.password = 'Обязательное поле'
                    }

                    return errors

                }}
                onSubmit={(values ) => {
                    const params = {userName:values.userName,password:values.password}
                    dispatch(authUser({params,auth:'/auth/login'}))

                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,

                  }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>

                        {errors.userName && touched.userName &&  <div className={styles.error}>{errors.userName}</div>}
                        <MyInput
                            placeholder={'Введите имя пользователя...'}
                            type={'text'}
                            name={'userName'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userName}/>
                        {errors.password && touched.password &&  <div  className={styles.error} >{errors.password}</div>}
                        <MyInput
                            placeholder={'Введите пароль...'}
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>

                        <div className={styles.btn_submit}>
                            <MyButton type={'submit'}>Войти</MyButton>
                        </div>
                        {status==='error'&&<div className={styles.error}>Неверный логин или пароль</div>}
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Login;