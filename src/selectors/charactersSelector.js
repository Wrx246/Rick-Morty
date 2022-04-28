export const getCharactersListSelector = (state) => state.charactersReducer.characters
export const getFilterCharacterSelector = (state) => state.charactersReducer.filter
export const getDetailsCharacterSelector = (state) => state.charactersReducer.details
export const getFavoriteCharacterSelector = (state) => state.charactersReducer.favorite
export const getIsLoginSelector = (state) => state.authReducer.isLogin
export const getIsRegistratedSelector = (state) => state.authReducer.isRegistrated
export const getIsFetchingSelector = (state) => state.charactersReducer.isFetching