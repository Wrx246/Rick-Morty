import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../../UI/myCard/MyCard";
import MyHeader from "../../../UI/myHeader/MyHeader";
import st from './CharactersPage.module.scss';
import * as contentActions from '../../../store/actions/charactersActions';
import { getCharactersListSelector, getFilterCharacterSelector } from "../../../selectors/charactersSelector";

const CharactersPage = () => {
    const dispatch = useDispatch();
    const characters = useSelector(getCharactersListSelector);
    const filterCharacter = useSelector(getFilterCharacterSelector);
    const [search, setSearch] = useState('');

    

    useEffect(() => {
        dispatch(contentActions.getCharactersList())
      }, [])
 
    if (filterCharacter.length === 0) {
        return (
            <div className={st.characters}>
                <MyHeader search={search} setSearch={setSearch} title={'Characters'} />
                <div className={st.characters__cards}>
                    {characters?.map((characters) => 
                         (
                            <MyCard
                                id={characters.id}
                                name={characters.name}
                                status={characters.status}
                                gender={characters.gender}
                                image={characters.image} />
                        )
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.characters}>
                <MyHeader search={search} setSearch={setSearch} title={'Characters'} />
                <div className={st.characters__cards}>
                    {filterCharacter?.map((filterCharacter) => {
                        return (
                            <MyCard
                                id={filterCharacter.id}
                                name={filterCharacter.name}
                                status={filterCharacter.status}
                                gender={filterCharacter.gender}
                                image={filterCharacter.image} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CharactersPage;