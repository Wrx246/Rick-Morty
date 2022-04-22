import React from "react";
import MyInput from "../myImput/MyInput";
import st from './MyHeader.module.scss';

const MyHeader = ({title, search, setSearch}) => {

    return (
        <div className={st.myHeader__header}>
            <h1>{title}</h1>
            <hr />
            <MyInput search={search} setSearch={setSearch} />
        </div>
    )
}

export default MyHeader;