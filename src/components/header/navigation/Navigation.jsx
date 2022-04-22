import React from "react";
import { Link } from "react-router-dom";
import st from './Navigation.module.scss'

const Navigation = () => {

    return (
        <div className={st.navigation}>
            <Link to='/' className={st.navigation__link}>Home</Link>
            <Link to='/characters' className={st.navigation__link}>My characters</Link>
            <Link to='/about' className={st.navigation__link}>About</Link>
            <Link to='/login' className={st.navigation__link}>Sign In</Link>
        </div>
    )
}

export default Navigation;