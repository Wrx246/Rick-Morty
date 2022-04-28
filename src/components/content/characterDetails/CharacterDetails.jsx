import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsCharacterSelector, getIsFetchingSelector } from "../../../selectors/charactersSelector";
import * as contentActions from '../../../store/actions/charactersActions';
import st from './CharacterDetails.module.scss';
import Preloader from '../../../UI/preloader/Preloader'



const CharacterDetails = () => {
    const details = useSelector(getDetailsCharacterSelector)
    const isFetching = useSelector(getIsFetchingSelector)
    const dispatch = useDispatch();
    const { id } = useParams();

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteList'))
    const login = JSON.parse(localStorage.getItem('ConfirmedLogin'))

    const handleClick = (e) => {
        e.preventDefault();
        if (login === true) {
            favoriteList.push(details)
            localStorage.setItem('FavoriteList', JSON.stringify(favoriteList))
        } else {
            alert('You need login for this!')
        }

    }

    const handleRemove = (e) => {
        e.preventDefault();
        if (login === true) {
            let filtered = favoriteList.filter((el) => el.id !== details.id)
            localStorage.setItem('FavoriteList', JSON.stringify(filtered))
        } else {
            alert('You need login for this!')
        }
    }

    useEffect(() => {
        dispatch(contentActions.getDetailsCharacter({ id }))
    }, [])

    if(isFetching === true) {
        return (
            <div className={st.details}>
                <div className={st.details__body}>
                    <div className={st.details__title}>
                        <h2>Name: Unknown</h2>
                        <h3>Status: Unknown</h3>
                        <h3>Species: Unknown</h3>
                        <h3>Gender: Unknown</h3>
                        <button onClick={handleClick} type="button" className={st.details__button}>Add to favorite</button>
                        <button onClick={handleRemove} type="button" className={st.details__button}>Remove from favorite</button>
                    </div>
                    <div className={st.preloader__body}> <Preloader /> </div>
                </div>
            </div>
        )
    }

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