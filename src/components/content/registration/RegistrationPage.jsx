import React, { useEffect, useState } from "react";
import RegButton from "../../../UI/buttons/registrationButton/RegButton";
import LoginPage from "../login/LoginPage";
import st from './RegistrationPage.module.scss';


const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const userCheck = localStorage.getItem('Username')
    const passCheck = localStorage.getItem('Password')

    useEffect(() => {
        if (userCheck && passCheck) {
            setLogin(false)
        } else if (!userCheck && !passCheck) {
            setLogin(true)
        }
    }, [userCheck, passCheck])

    if (login === false) {
        return (
            <LoginPage />
        )
    } else {
        return (
            <div className={st.registration}>
                <div className={st.registration__header}>
                    <h1>Registration</h1>
                    <hr />
                    <div className={st.registration__form}>
                        <h2>Registration account</h2>
                        <form>
                            <div className={st.form__body}>
                                <label htmlFor='name'>Username</label>
                                <input
                                    id='username'
                                    className={st.form__input}
                                    type='text'
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.currentTarget.value)}
                                />
                                <label htmlFor='email'>Email</label>
                                <input
                                    id='email'
                                    className={st.form__input}
                                    type='text'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                />
                                <label htmlFor='password'>Password</label>
                                <input
                                    id='password'
                                    className={st.form__input}
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                />
                            </div>
                        </form>
                        <RegButton
                            username={username}
                            setUsername={setUsername}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            name='Registration' />
                    </div>
                </div>

            </div>
        )
    }


}

export default RegistrationPage;