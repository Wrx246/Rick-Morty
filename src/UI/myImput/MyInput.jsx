import React from "react";
import { useDispatch } from "react-redux";
import st from './MyInput.module.scss';
import * as contentActions from '../../store/actions/charactersActions'

const MyInput = ({ search, setSearch }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(contentActions.getFilterCharacter({
            search
        }));
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase()) }
                className={st.myinput}
                type='text'
                placeholder='Search...' />
        </form>
    )
}

export default MyInput;