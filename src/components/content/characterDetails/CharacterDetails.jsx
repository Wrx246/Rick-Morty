import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsCharacterSelector } from "../../../selectors/charactersSelector";
import * as contentActions from '../../../store/actions/charactersActions';
import st from './CharacterDetails.module.scss';


const CharacterDetails = () => {
    const details = useSelector(getDetailsCharacterSelector)
    const dispatch = useDispatch();
    const { id } = useParams();

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteList'))

    const handleClick = (e) => {
        e.preventDefault();
        favoriteList.push(details)
        localStorage.setItem('FavoriteList', JSON.stringify(favoriteList))
    }

    const handleRemove = (e) => {
        e.preventDefault();
        let filtered = favoriteList.filter((el) => el.id !== details.id)
        localStorage.setItem('FavoriteList', JSON.stringify(filtered))
    }

    useEffect(() => {
        dispatch(contentActions.getDetailsCharacter({ id }))
    }, [])

    return (
        <div className={st.details}>
            <div className={st.details__body}>
                <div className={st.details__title}>
                    <h2>Name: {details.name}</h2>
                    <h3>Status: {details.status}</h3>
                    <h3>Species: {details.species}</h3>
                    <h3>Gender: {details.gender}</h3>
                    <button onClick={handleClick} type="button" className={st.details__button}>Add to favorite</button>
                    <button onClick={handleRemove} type="button" className={st.details__button}>Remove from favorite</button>
                </div>
                <img src={details.image} alt='Character' />
            </div>
        </div>
    )
}

export default CharacterDetails;