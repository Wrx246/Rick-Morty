import React from "react";
import MyCard from "../../../UI/myCard/MyCard";
import MyHeader from "../../../UI/myHeader/MyHeader";
import st from './CharactersPage.module.scss';

const CharactersPage = () => {
    return (
        <div className={st.characters}>
            <MyHeader title={'Characters'} />
            <div className={st.characters__cards}>
                <MyCard />
            </div>
        </div>
    )
}

export default CharactersPage;