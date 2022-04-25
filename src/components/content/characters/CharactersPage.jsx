import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteCharacterSelector } from "../../../selectors/charactersSelector";
import * as contentActions from '../../../store/actions/charactersActions';
import MyCard from "../../../UI/myCard/MyCard";
import st from './CharactersPage.module.scss';

const CharactersPage = () => {
    const dispatch = useDispatch();
    const favList = useSelector(getFavoriteCharacterSelector)

    const favoriteList = JSON.parse(localStorage.getItem('FavoriteList'));
    const login = JSON.parse(localStorage.getItem('ConfirmedLogin'))

    useEffect(() => {
        dispatch(contentActions.setFavoriteCharacter(favoriteList))
    }, [])

    if (login === true) {
        if (favList.length) {
            return (
                <div className={st.characters}>
                    <div className={st.characters__header}>
                        <h1>My favorite characters</h1>
                        <hr />
                    </div>
                    <div className={st.characters__cards}>
                        {favList.map((favList) => (
                            <MyCard
                                id={favList.id}
                                name={favList.name}
                                status={favList.status}
                                gender={favList.gender}
                                image={favList.image}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className={st.characters}>
                <div className={st.characters__header}>
                    <h1>My favorite characters</h1>
                    <hr />
                    <h2>You must be logged in to see the list of characters</h2>
                </div>
            </div>
        )
    }

    
}

export default CharactersPage;