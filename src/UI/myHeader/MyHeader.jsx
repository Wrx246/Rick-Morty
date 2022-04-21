import React from "react";
import MyInput from "../myInput/MyInput";
import st from './MyHeader.module.scss';

const MyHeader = ({title}) => {
    return (
        <div className={st.myHeader__header}>
            <h1>{title}</h1>
            <hr />
            <MyInput />
        </div>
    )
}

export default MyHeader;