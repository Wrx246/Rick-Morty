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

    useEffect(() => {
        dispatch(contentActions.setFavoriteCharacter(favoriteList))
    }, [])


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
}

export default CharactersPage;