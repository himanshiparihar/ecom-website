import { takeLatest, put, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import constants from './constants';
import OrderApi from '../../api/order';
import { fetchOrdersStart } from './actions';

export function* fetchOrder({payload}){
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        let {orders} = yield OrderApi.fetchOrders({userId: payload, userToken:localStorage.userToken})
        yield put({
            type: constants.FETCH_ORDERS_SUCCESS,
            payload: orders
        })
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.FETCH_ORDERS_FAILURE,
            payload: error
        });
    }
}

export function* createOrder({payload}){
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        yield OrderApi.createOrder({userId: payload.userId, items: payload.items, userToken: localStorage.userToken})
        yield put({
           type: constants.CREATE_ORDER_SUCCESS,
        })
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put(push(`/${payload.userId}/orders`));
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.CREATE_ORDER_FAILURE,
            payload: error
        });
    }
}

export function* cancelOrder({payload}){
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        let currentUser = JSON.parse(localStorage.currentUser);
        let userToken = localStorage.userToken;
        yield OrderApi.cancelOrder({id: payload, userToken})
        yield put({
           type: constants.CANCEL_ORDER_SUCCESS,
        });
        yield put(fetchOrdersStart(currentUser.id));
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.CANCEL_ORDER_FAILURE,
            payload: error
        });
    }
}

export function* onFetchOrderStart(){
    yield takeLatest(constants.FETCH_ORDERS_START, fetchOrder);
}
export function* onCreateOrderStart(){
    yield takeLatest(constants.CREATE_ORDER_START, createOrder);
}

export function* onCancelOrderStart(){
    yield takeLatest(constants.CANCEL_ORDER_START, cancelOrder);
}

export function* orderSaga() {
    yield all([
       call(onFetchOrderStart),
       call(onCreateOrderStart),
       call(onCancelOrderStart)
    ]);
}