import * as authActions from '../actions/authAcitons';


const defaultState = {
    isLogin: false,
    isRegistrated: false,
}


const authReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case authActions.SET_IS_LOGIN: return { ...state, isLogin: payload }
        case authActions.IS_REGISTRATED: return { ...state, isRegistrated: payload }
        default:
            return state
    }
}

export default authReducer;