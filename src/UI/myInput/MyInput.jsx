import React from "react";
import st from './MyInput.module.scss';

const MyInput = () => {
    return(
        <form>
            <input className={st.myinput} type='text' placeholder='Search...' />
        </form>
    )
}

export default MyInput;