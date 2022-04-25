import React from "react";
import LoginButton from "../../../UI/buttons/loginButton/LoginButton";
import st from './UserPage.module.scss';


const UserPage = () => {

    const UserStorage = JSON.parse(localStorage.getItem('Username'));

    return (
        <div className={st.logout}>
            <div className={st.logout__header}>
                <h1>{UserStorage}</h1>
                <hr />
                <div className={st.logout__form}>
                    <h2>Login successfull</h2>
                    
                    <LoginButton
                        name='Logout'
                    />
                </div>
            </div>
        </div>
    )
}


export default UserPage;