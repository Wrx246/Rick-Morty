import React from 'react';
import setRegistration from '../../../services/registrationService';
import st from './RegButton.module.scss';


const RegButton = (children) => {
    const {
        name,
        username,
        email,
        password,
        setUsername,
        setEmail,
        setPassword } = children

    const handleSubmit = (e) => {
        localStorage.setItem('FavoriteList', '[]')
        e.preventDefault();
        if (!email) {
            alert("Enter email!")
        } else if (!username) {
            alert("Enter username!")
        } else if (!password) {
            alert("Enter password!")
        } else {
            setRegistration({ username, email, password })
            setEmail('');
            setPassword('');
            setUsername('');
        }

    }

    return (
        <div>
            <button
                onClick={handleSubmit}
                type='submit'
                className={st.RegButton}>
                {name}
            </button>
        </div>
    )
}

export default RegButton;