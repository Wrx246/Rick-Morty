import React from "react";
import st from './MyCard.module.scss';
import character from '../../assets/images/characters.png'

const MyCard = () => {
    return (
        <div className={st.card__wrapper}>
            <img src={character} alt='character' />
            <div className={st.card__description}>
                <h4>Name:</h4>
                <h5>status:</h5>
                <h5>gender:</h5>
            </div>
        </div>
    )
}

export default MyCard;