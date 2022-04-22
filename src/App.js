import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ContentPage from './components/content/ContentPage'
import CharactersPage from './components/content/characters/CharactersPage'
import LocationPage from './components/content/Location/LocationPage'
import AboutPage from './components/content/about/AboutPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<ContentPage />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/login' element={<LocationPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
