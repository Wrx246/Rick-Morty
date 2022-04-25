import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import charactersReducer from "./reducers/charactersReducer";
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "../sagas/sagas";
import authReducer from "./reducers/authReducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    charactersReducer: charactersReducer, 
    authReducer: authReducer,
})

const store = createStore( reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga)

export default store;