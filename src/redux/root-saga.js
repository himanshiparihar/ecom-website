import { all, call } from 'redux-saga/effects';

import {authSaga} from './auth/sagas';
import {categorySaga} from './category/sagas';
import {productSaga} from './product/sagas'
import {cartSaga} from './cart/sagas';
import {orderSaga} from './order/sagas';

export default function* rootSaga() {
    yield all([
        call(authSaga),
        call(categorySaga),
        call(productSaga),
        call(cartSaga),
        call(orderSaga),
    ]);
}