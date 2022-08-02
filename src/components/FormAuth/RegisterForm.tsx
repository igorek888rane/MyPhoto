import React, {FC} from 'react';
import styles from './Form.module.scss';
import {Formik, FormikErrors} from 'formik';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {FormValues} from "../../@types/types";
import {useAppDispatch} from "../../redux/store";
import {authUser} from "../../redux/slices/userSlice";


const RegisterForm: FC = () => {
    const initialValues: FormValues = {email: 'user1@gmail.com', userName: 'user1', password: '123123978aA', confirmPassword: '123123978aA'}
    const dispatch = useAppDispatch()

    return (
        <div className={styles.form_block}>
            <h1>Регистрация</h1>
            <Formik
                initialValues={initialValues}

                validate={values => {
                    const errors: FormikErrors<FormValues> = {};
                    if (!values.email) {
                        errors.email = 'Обязательное поле';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Не корректный email';
                    }
                    if(!values.userName){
                        errors.userName = 'Обязательное поле'
                    }else if(values.userName.length<3||values.userName.length>16){
                        errors.userName = ' Должно быть больше трех и меньше 16 символов '
                    }

                    if (!values.password) {
                        errors.password = 'Обязательное поле'
                    } else if (!/(?=.*[0-9])/g.test(values.password)) {
                        errors.password = 'Пароль должен содержать цифру'
                    } else if (!/(?=.*[a-z])(?=.*[A-Z])/g.test(values.password)) {
                        errors.password = 'Должен содержать одну букву верхнего и нижнего регистра'
                    } else if (!/[0-9a-zA-Z!@#$%^&*]{8,}/g.test(values.password)) {
                        errors.password = ' Минимум 8 символов'
                    }

                    if (!values.confirmPassword) {
                        errors.confirmPassword = 'Обязательное поле'
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = 'Пароли не совпадают'
                    }
                    return errors

                }}
                onSubmit={(values) => {
                   const params = {userName:values.userName,email:values.email,password:values.password}
                    dispatch(authUser({params,auth:'/auth/registration'}))

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

                        {errors.userName && touched.userName && <div className={styles.error}>{errors.userName}</div>}
                        <MyInput
                            placeholder={'Введите имя пользователя...'}
                            type={'text'}
                            name={'userName'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userName}/>

                        {errors.email && touched.email && <div className={styles.error}>{errors.email}</div>}
                        <MyInput
                            placeholder={'Введите email...'}
                            type={'email'}
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>

                        {errors.password && touched.password && <div  className={styles.error} >{errors.password}</div>}
                        <MyInput
                            placeholder={'Введите пароль...'}
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                        {errors.confirmPassword && touched.confirmPassword && <div  className={styles.error}>{errors.confirmPassword}</div>}
                        <MyInput
                            placeholder={'Повторите пароль...'}
                            type={'password'}
                            name={'confirmPassword'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}/>

                        <div className={styles.btn_submit}>
                            <MyButton type={'submit'}>Зарегистрироваться</MyButton>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;