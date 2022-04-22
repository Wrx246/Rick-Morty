import React from "react";
import { Link } from "react-router-dom";
import st from './MyCard.module.scss';

const MyCard = ({id, name, status, gender, image}) => {

    return (
        <Link to={`/${id}`}>
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