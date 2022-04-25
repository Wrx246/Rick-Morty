import React from "react";
import { Link } from "react-router-dom";
import st from './Navigation.module.scss'

const Navigation = () => {

    const login = JSON.parse(localStorage.getItem('ConfirmedLogin'))
    const UserStorage = JSON.parse(localStorage.getItem('Username'));

    if(login === true) {
        return (
            <div className={st.navigation}>
                <Link to='/' className={st.navigation__link}>Home</Link>
                <Link to='/characters' className={st.navigation__link}>My characters</Link>
                <Link to='/about' className={st.navigation__link}>About</Link>
                <Link to='/user' className={st.navigation__link}>{UserStorage}</Link>                
            </div>
        )
    } else {
        return (
            <div className={st.navigation}>
                <Link to='/' className={st.navigation__link}>Home</Link>
                <Link to='/characters' className={st.navigation__link}>My characters</Link>
                <Link to='/about' className={st.navigation__link}>About</Link>
                <Link to='/login' className={st.navigation__link}>Sign In</Link>
            </div>
        )
    }    
}

export default Navigation;