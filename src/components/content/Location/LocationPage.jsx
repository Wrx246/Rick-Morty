import React from "react";
import MyCard from "../../../UI/myCard/MyCard";
import MyHeader from "../../../UI/myHeader/MyHeader";
import st from './LocationPage.module.scss';


const LocationPage = () => {
    return (
        <div className={st.location}>
            <MyHeader title={'Locations'} />
            <div className={st.location__cards}>
                    <MyCard />
            </div>
        </div>
    )
}

export default LocationPage;