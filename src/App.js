import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ContentPage from './components/content/ContentPage'
import CharactersPage from './components/content/characters/CharactersPage'
import LocationPage from './components/content/Location/LocationPage'
import EpisodesPage from './components/content/Episodes/EpisodesPage'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contentActions from './store/actions/charactersActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contentActions.getCharactersList())
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<ContentPage />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/locations' element={<LocationPage />} />
        <Route path='/episodes' element={<EpisodesPage />} />
      </Routes>
    </>
  );
}

export default App;
