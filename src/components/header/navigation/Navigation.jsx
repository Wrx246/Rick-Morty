import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoginSelector } from "../../../selectors/charactersSelector";
import st from './Navigation.module.scss'

const Navigation = () => {
    const isLogin = useSelector(getIsLoginSelector)
    const [username, setUsername] = useState('');
    const [logined, setLogined] = useState(false);

    const login = JSON.parse(localStorage.getItem('ConfirmedLogin'))
    const UserStorage = JSON.parse(localStorage.getItem('Username'));

    useEffect(() => {
        if (isLogin === true || login === true) {
            setUsername(UserStorage)
            setLogined(true)
        } else if (isLogin === false || login === false) {
            setLogined(false)
        }
    }, [isLogin, login, UserStorage])



    if (logined === true && UserStorage) {
        return (
            <div className={st.navigation}>
                <Link to='/' className={st.navigation__link}>Home</Link>
                <Link to='/characters' className={st.navigation__link}>My characters</Link>
                <Link to='/about' className={st.navigation__link}>About</Link>
                <Link to='/user' className={st.navigation__link}>{username}</Link>
            </div>
        )
    } else if (!UserStorage) {
        return (
            <div className={st.navigation}>
                <Link to='/' className={st.navigation__link}>Home</Link>
                <Link to='/characters' className={st.navigation__link}>My characters</Link>
                <Link to='/about' className={st.navigation__link}>About</Link>
                <Link to='/registration' className={st.navigation__link}>Sign Up</Link>
            </div>
        )
    } else if (logined === false) {
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