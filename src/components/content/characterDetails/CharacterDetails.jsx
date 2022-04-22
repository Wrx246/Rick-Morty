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
                </div>
                <img src={details.image} alt='Character' />
            </div>
        </div>
    )
}

export default CharacterDetails;