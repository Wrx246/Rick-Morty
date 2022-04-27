import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "../../../UI/buttons/loginButton/LoginButton";
import * as contentActions from '../../../store/actions/charactersActions';
import st from './LoginPage.module.scss';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [confirmUser, setConfirmUser] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [confirmLogin, setConfirmLogin] = useState(false);

    const UserStorage = JSON.parse(localStorage.getItem('Username'));
    const PassStorage = JSON.parse(localStorage.getItem('Password'));


    const setLogin = () => {
        if (!confirmUser || !confirmPass) {
            setConfirmLogin(false)
            alert("Enter Login and Password")
        } else if (confirmUser !== UserStorage) {
            setConfirmLogin(false)
            alert("Wrong Login!")
        } else if (confirmPass !== PassStorage) {
            setConfirmLogin(false)
            alert("Wrong Password")
        } else if (confirmUser === UserStorage && confirmPass === PassStorage) {
            setConfirmLogin(true);
            localStorage.setItem('ConfirmedLogin', JSON.stringify(true))
            dispatch(contentActions.setIsLogin(true))
        }
        
    }

    if (confirmLogin === true) {
        return (
            <div className={st.login}>
                <div className={st.login__header}>
                    <h1>Hello, {UserStorage}</h1>
                    <hr />
                    <div className={st.login__form}>
                        <h2>Login successfull</h2>
                        <Link to='/user' className={st.login__link}>Go to account settings</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.login}>
                <div className={st.login__header}>
                    <h1>Login</h1>
                    <hr />
                    <div className={st.login__form}>
                        <h2>Login to your account</h2>
                        <form>
                            <div className={st.form__body}>
                                <label htmlFor='name'>Username</label>
                                <input
                                    id='username'
                                    className={st.form__input}
                                    type='text'
                                    placeholder='Username'
                                    value={confirmUser}
                                    onChange={(e) => setConfirmUser(e.currentTarget.value)}
                                />
                                <label htmlFor='password'>Password</label>
                                <input
                                    id='password'
                                    className={st.form__input}
                                    type='password'
                                    placeholder='Password'
                                    value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.currentTarget.value)}
                                />
                            </div>
                        </form>
                        <LoginButton
                            setConfirmUser={setConfirmUser}
                            setConfirmPass={setConfirmPass}
                            setLogin={setLogin}
                            name='Login'
                        />
                    </div>
                </div>

            </div>
        )
    }



}

export default LoginPage;