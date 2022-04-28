import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsFetchingSelector } from "../../selectors/charactersSelector";
import Preloader from "../preloader/Preloader";
import st from './MyCard.module.scss';

const MyCard = ({ id, name, status, gender, image }) => {
    const isFetching = useSelector(getIsFetchingSelector)

    if (isFetching === true) {
        return (
            <div className={st.preloader__wrapper}>
                <div className={st.preloader__body}><Preloader /></div>
                <div className={st.card__description}>
                    <h4>Name: Unknown</h4>
                    <h5>status: Unknown</h5>
                    <h5>gender: Unknown</h5>
                </div>
            </div>
        )
    }

    return (
        <Link className={st.card__link} to={`/${id}`}>
            <div className={st.card__wrapper} key={id}>
                <img src={image} alt='character' />
                <div className={st.card__description}>
                    <h4>Name: {name}</h4>
                    <h5>status: {status}</h5>
                    <h5>gender: {gender}</h5>
                </div>
            </div>
        </Link>
    )
}

export default MyCard;