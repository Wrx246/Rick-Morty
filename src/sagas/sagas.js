import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllCharacters, getCharacterDetails, getCharactersFilter } from '../API/getCharacters';
import * as contentActions from '../store/actions/charactersActions';


function* getAllCharactersWorker() {
    try {
        const response = yield call(getAllCharacters);
        yield put(contentActions.getCharactersListSuccess(response.data.results))
    } catch (e) {
        yield put(contentActions.getCharactersListFailed())
        yield console.log(e)
    }
}

function* getFilterCharactersWorker(action) {
    const { search } = action.payload

    try {
        const response = yield call(getCharactersFilter, search)
        yield put(contentActions.getFilterCharacterSuccess(response.data.results))
    } catch (e) {
        yield console.log(e)
    }
}

function* getDetailsCharacterWorker(action) {
    const { id } = action.payload

    try {
        const response = yield call(getCharacterDetails, id)
        yield put(contentActions.getDetailsCharacterSuccess(response.data))
    } catch (e) {
        yield put(contentActions.getDetailsCharacterFailed())
        yield console.log(e)
    }
}



export function* watcherSaga() {
    yield takeEvery(contentActions.GET_CHARACTERS_LIST, getAllCharactersWorker)
    yield takeEvery(contentActions.GET_FILTER_CHARACTER, getFilterCharactersWorker)
    yield takeEvery(contentActions.GET_DETAILS_CHARACTER, getDetailsCharacterWorker)
}