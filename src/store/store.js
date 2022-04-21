import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import charactersReducer from "./reducers/charactersReducer";


const reducers = combineReducers({
    charactersReducer: charactersReducer,
})

const store = createStore( reducers, composeWithDevTools(applyMiddleware()));

export default store;