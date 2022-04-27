import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as contentActions from '../../../store/actions/charactersActions';
import st from './UserPage.module.scss';


const UserPage = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState('https://i.imgur.com/ndu6pfe.png');
    const [onEdit, setOnEdit] = useState(false);
    const [ editValue, setEditValue ] = useState('');
    const navigate = useNavigate();

    const UserStorage = JSON.parse(localStorage.getItem('Username'));
    const EmailStorage = JSON.parse(localStorage.getItem('Email'));
    

    const handleFiles = (files) => {
        setUrl(files.base64)
    }

    const onHandleLogout = (e) => {
        e.preventDefault();
        localStorage.setItem('ConfirmedLogin', JSON.stringify(false))
        let path = `/login`;
        navigate(path);
        dispatch(contentActions.setIsLogin(false))
    }
    
    const onHandlePassword = (e) => {
        e.preventDefault();
        setOnEdit(true);
    }

    const onHandleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('Password', JSON.stringify(editValue));
        setOnEdit(false);
        setEditValue('');
    }

    if(onEdit) {
        return (
            <div className={st.user}>
                <div className={st.user__header}>
                    <div className={st.user__form}>
                        <h2>Account settings</h2>
                        <div className={st.account}>
                            <div className={st.avatarBlock}>
                                <div className={st.avatarInput}>
                                    <img src={url} alt='Avatar' />
                                </div>
                                <ReactFileReader
                                    fileTypes={['.png', '.jpg']}
                                    base64={true}
                                    handleFiles={handleFiles}
                                >
                                    <button type="button" className={st.avatarButton}>Change avatar</button>
                                </ReactFileReader>
                            </div>
                            <div className={st.accountBlock}>
                                <h3>Username: {UserStorage}</h3>
                                <h3>Email: {EmailStorage}</h3>
                                <div className={st.buttonBlock}>
                                <button type="button" onClick={onHandleSave} className={st.accountBlock__button}>Save password</button>
                                <button type="button" onClick={onHandleLogout} className={st.accountBlock__button}>Logout</button>
                                
                                </div>
                                <input
                                    id='changepassword'
                                    className={st.accountBlock__input}
                                    type='password'
                                    placeholder='Enter new password'
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={st.user}>
            <div className={st.user__header}>
                <div className={st.user__form}>
                    <h2>Account settings</h2>
                    <div className={st.account}>
                        <div className={st.avatarBlock}>
                            <div className={st.avatarInput}>
                                <img src={url} alt='Avatar' />
                            </div>
                            <ReactFileReader
                                fileTypes={['.png', '.jpg']}
                                base64={true}
                                handleFiles={handleFiles}
                            >
                                <button type="button" className={st.avatarButton}>Change avatar</button>
                            </ReactFileReader>
                        </div>
                        <div className={st.accountBlock}>
                            <h3>Username: {UserStorage}</h3>
                            <h3>Email: {EmailStorage}</h3>
                            <div className={st.buttonBlock}>
                            <button type="button" onClick={onHandlePassword} className={st.accountBlock__button}>Change password</button>
                            <button type="button" onClick={onHandleLogout} className={st.accountBlock__button}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserPage;