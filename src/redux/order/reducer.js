import constants from './constants';

const INITIAL_STATE = {
    loading: false,
    error: null,
    orderList: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case constants.IS_LOADING:
            return{
                ...state,
                loading: action.payload,
            }
        case constants.CANCEL_ORDER_FAILURE:
        case constants.FETCH_ORDERS_FAILURE:
        case  constants.CREATE_ORDER_FAILURE:
            return{
                ...state,
                error: action.payload,
                orderList: null,
            }
        case constants.FETCH_ORDERS_SUCCESS: 
            return{
                ...state,
                orderList: action.payload,
                error: null,
            }
        default: 
            return state;  
    }
}

export default reducer;