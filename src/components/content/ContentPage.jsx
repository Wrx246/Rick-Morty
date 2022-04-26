import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersListSelector, getFilterCharacterSelector } from "../../selectors/charactersSelector";
import MyCard from "../../UI/myCard/MyCard";
import st from './ContentPage.module.scss';
import * as contentActions from '../../store/actions/charactersActions';
import MyHeader from "../../UI/myHeader/MyHeader";

const ContentPage = () => {
    const dispatch = useDispatch();
    const characters = useSelector(getCharactersListSelector);
    const filterCharacter = useSelector(getFilterCharacterSelector);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(contentActions.getCharactersList())
    }, [])

    if (filterCharacter.length) {
        return (
            <div className={st.content}>
                <MyHeader search={search} setSearch={setSearch} title={'Rick and Morty'} />
                <div className={st.content__cards}>
                    {filterCharacter?.map((filterCharacter) => (
                        <MyCard
                            id={filterCharacter.id}
                            name={filterCharacter.name}
                            status={filterCharacter.status}
                            gender={filterCharacter.gender}
                            image={filterCharacter.image} />
                    )
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className={st.content}>
                <MyHeader search={search} setSearch={setSearch} title={'Rick and Morty'} />
                <div className={st.content__cards}>
                    {characters?.map((characters) => (
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
    }


}

export default ContentPage;