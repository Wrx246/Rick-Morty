import React from "react";
import Navigation from "./navigation/Navigation";
import st from './Header.module.scss'



const Header = () => {
    return(
        <div className={st.header}>
            <Navigation />
        </div>
    )
}

export default Header;