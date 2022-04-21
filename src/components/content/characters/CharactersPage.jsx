import React from "react";
import MyCard from "../../../UI/myCard/MyCard";
import st from './CharactersPage.module.scss';

const CharactersPage = () => {
    return (
        <div className={st.characters}>
            characters
            <MyCard />
        </div>
    )
}

export default CharactersPage;