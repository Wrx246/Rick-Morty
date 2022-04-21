import React from "react";
import MyCard from "../../../UI/myCard/MyCard";
import MyHeader from "../../../UI/myHeader/MyHeader";
import st from './EpisodesPage.module.scss';

const EpisodesPage = () => {
    return (
        <div className={st.episodes}>
            <MyHeader title={'Episodes'} />
            <div className={st.episodes__cards}>
                <MyCard />
            </div>
        </div>
    )
}

export default EpisodesPage;