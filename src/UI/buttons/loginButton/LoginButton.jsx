import React from 'react';
import st from './LoginButton.module.scss';


const LoginButton = ({name}) => {

    return (
        <div>
            <button
                type='submit'
                className={st.LoginButton}>
                {name}
            </button>
        </div>
    )
}

export default LoginButton;