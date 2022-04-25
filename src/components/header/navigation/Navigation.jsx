import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import st from './Navigation.module.scss'

const Navigation = () => {
    const [username, setUsername] = useState('');
    const [logined, setLogined] = useState(false);

    const login = JSON.parse(localStorage.getItem('ConfirmedLogin'))
    const UserStorage = JSON.parse(localStorage.getItem('Username'));

    useEffect(() => {
        if(login === true) {
            setUsername(UserStorage)
            setLogined(true)
        }
    }, [login, UserStorage])

    return (
                <div className={st.navigation}>
                    <Link to='/' className={st.navigation__link}>Home</Link>
                    <Link to='/characters' className={st.navigation__link}>My characters</Link>
                    <Link to='/about' className={st.navigation__link}>About</Link>
                    { logined === true ? 
                    <Link to='/user' className={st.navigation__link}>{username}</Link>:
                    <Link to='/login' className={st.navigation__link}>Sign In</Link>}
                </div>
            )

    // if (login === true) {
    //     return (
    //         <div className={st.navigation}>
    //             <Link to='/' className={st.navigation__link}>Home</Link>
    //             <Link to='/characters' className={st.navigation__link}>My characters</Link>
    //             <Link to='/about' className={st.navigation__link}>About</Link>
    //             <Link to='/user' className={st.navigation__link}>{UserStorage}</Link>
    //         </div>
    //     )
    // } else if (!UserStorage) {
    //     return (
    //         <div className={st.navigation}>
    //             <Link to='/' className={st.navigation__link}>Home</Link>
    //             <Link to='/characters' className={st.navigation__link}>My characters</Link>
    //             <Link to='/about' className={st.navigation__link}>About</Link>
    //             <Link to='/registration' className={st.navigation__link}>Sign Up</Link>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className={st.navigation}>
    //             <Link to='/' className={st.navigation__link}>Home</Link>
    //             <Link to='/characters' className={st.navigation__link}>My characters</Link>
    //             <Link to='/about' className={st.navigation__link}>About</Link>
    //             <Link to='/login' className={st.navigation__link}>Sign In</Link>
    //         </div>
    //     )
    // }
}

export default Navigation;