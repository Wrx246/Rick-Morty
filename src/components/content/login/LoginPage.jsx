import React from "react";
import LoginButton from "../../../UI/buttons/loginButton/LoginButton";
import MyCard from "../../../UI/myCard/MyCard";
import st from './LoginPage.module.scss';


const LoginPage = () => {
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
                            />
                            <label htmlFor='password'>Password</label>
                            <input
                                id='password'
                                className={st.form__input}
                                type='password'
                                placeholder='Password' />
                        </div>
                    </form>
                    <LoginButton name='Login' />
                </div>
            </div>

        </div>
    )
}

export default LoginPage;