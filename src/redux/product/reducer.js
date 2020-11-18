import constants from './constants';

const INITIAL_STATE = {
    error: null,
    productList: null,
    filteredList: null,
    loading: false,
    product: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constants.FETCH_PRODUCT_LIST_SUCCESS: 
            return {
                ...state,
                productList: action.payload,
                filteredList: action.payload,
                error: null,
            }
        case constants.FILTER_PRODUCT_SUCCESS:
            return{
                ...state,
                filteredList: action.payload,
            }
        case constants.FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                product: action.payload,
                error:null,
            }
        case constants.FETCH_PRODUCT_LIST_FAILURE: 
        case constants.FETCH_PRODUCT_FALIURE:
        case constants.FILTER_PRODUCT_FALIURE:
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