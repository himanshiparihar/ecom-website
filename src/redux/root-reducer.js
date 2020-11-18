import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import category from './category/reducer';
import product from './product/reducer';
import cart from './cart/reducer';
import orders from './order/reducer';

const reducers = combineReducers({
    routing: routerReducer,
    auth,
    category,
    product,
    cart,
    orders,
});

export default reducers;