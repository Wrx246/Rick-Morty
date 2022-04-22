import React from "react";
import MyCard from "../../../UI/myCard/MyCard";
import st from './CharactersPage.module.scss';

const CharactersPage = () => {


    return (
        <div className={st.characters}>
            <div className={st.characters__header}>
                <h1>My favorite characters</h1>
                <hr />
            </div>
            <div className={st.characters__cards}>
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />
            </div>
        </div>
    )
}

export default CharactersPage;