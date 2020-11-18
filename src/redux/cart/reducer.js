import constants from './constants';

const INITIAL_STATE = {
    error: null,
    cartItems: null,
    loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constants.FETCH_CART_ITEMS_SUCCESS: 
            return {
                ...state,
                cartItems: action.payload,
                error: null,
            }
        case constants.CLEAR_CART_SUCCESS:
            return{
                ...state,
                cartItems:null,
                error: null,
            }
        case constants.ADD_ITEM_TO_CART_FALIURE:
        case constants.CLEAR_CART_FALIURE:
        case constants.UPDATE_CART_ITEM_FALIURE:
        case constants.DELETE_CART_ITEM_FALIURE:
        case constants.FETCH_CART_ITEMS_FALIURE: 
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