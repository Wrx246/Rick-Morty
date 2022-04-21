import React from "react";
import { Link } from "react-router-dom";
import st from './Navigation.module.scss'

const Navigation = () => {

    return (
        <div className={st.navigation}>
            <Link to='/' className={st.navigation__link}>Home</Link>
            <Link to='/characters' className={st.navigation__link}>Characters</Link>
            <Link to='/location' className={st.navigation__link}>Location</Link>
            <Link to='/episodes' className={st.navigation__link}>Episodes</Link>
        </div>
    )
}

export default Navigation;