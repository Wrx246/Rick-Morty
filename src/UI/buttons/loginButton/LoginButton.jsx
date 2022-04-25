import React from 'react';
import st from './LoginButton.module.scss';


const LoginButton = (children) => {
    const {
        setLogin,
        setConfirmUser,
        setConfirmPass,
        name } = children

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin();
        setConfirmUser('');
        setConfirmPass(''); 
    }

    return (
        <div>
            <button
                onClick={handleSubmit}
                type='submit'
                className={st.LoginButton}>
                {name}
            </button>
        </div>
    )
}

export default LoginButton;