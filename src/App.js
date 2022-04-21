import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import * as contentActions from './store/actions/charactersActions';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => dispatch(contentActions.getCharactersList({ payload: "hi"}))}>click</button>
      </header>
    </div>
  );
}

export default App;
