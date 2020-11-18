import constants from './constants';

const INITIAL_STATE = {
    error: null,
    loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constants.SIGN_IN_SUCCESS: 
        case constants.SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
            }
        case constants.SIGN_IN_FAILURE: 
        case constants.SIGN_UP_FAILURE:
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