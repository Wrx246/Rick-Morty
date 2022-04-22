import React from "react";
import st from './MyCard.module.scss';

const MyCard = ({id, name, status, gender, image}) => {

    return (
        <div className={st.card__wrapper} key={id}>
            <img src={image} alt='character' />
            <div className={st.card__description}>
                <h4>Name: {name}</h4>
                <h5>status: {status}</h5>
                <h5>gender: {gender}</h5>
            </div>
        </div>
    )
}

export default MyCard;