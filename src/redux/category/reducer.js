import constants from './constants';

const INITIAL_STATE = {
    error: null,
    categoriesList: null,
    loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constants.FETCH_CATEGORIES_SUCCESS: 
            return {
                ...state,
                categoriesList: action.payload,
                error: null,
            }
        case constants.FETCH_CATEGORIES_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        case constants.IS_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default: 
            return state;     
    }
}

export default reducer;