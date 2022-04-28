import st from './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { lazy, Suspense } from 'react';
import Preloader from './UI/preloader/Preloader';

const ContentPage = lazy(() => import('./components/content/ContentPage'))
const CharactersPage = lazy(() => import('./components/content/characters/CharactersPage'))
const LoginPage = lazy(() => import('./components/content/login/LoginPage'))
const RegistrationPage = lazy(() => import('./components/content/registration/RegistrationPage'))
const UserPage = lazy(() => import('./components/content/user/UserPage'))
const AboutPage = lazy(() => import('./components/content/about/AboutPage'))
const CharacterDetails = lazy(() => import('./components/content/characterDetails/CharacterDetails'))

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className={st.preloader}><Preloader /></div>}>
      <Routes>
        <Route exact path='/' element={<ContentPage />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/:id' element={<CharacterDetails />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
