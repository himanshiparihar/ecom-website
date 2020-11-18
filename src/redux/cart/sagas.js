import { takeLatest, put, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import constants from './constants';
import CartApi from '../../api/cart';
import { fetchCartItems } from './actions';

export function* fetchCart({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
       let userId = payload;
       let userToken = localStorage.userToken;
       const {cartItems} = yield CartApi.fetchCart({userId, userToken});
       yield put({
           type: constants.FETCH_CART_ITEMS_SUCCESS,
           payload: cartItems,
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
            type: constants.FETCH_CART_ITEMS_FALIURE,
            payload: error
        });
    }
}

export function* addItem({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        const {userId, item, quantity } = payload;
        let userToken = localStorage.userToken;
        yield CartApi.createCart({userId, item, quantity, userToken});
        yield put({
           type: constants.ADD_ITEM_TO_CART_SUCCESS,
        })
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put(push(`/${userId}/cart`))
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.ADD_ITEM_TO_CART_FALIURE,
            payload: error
        });
    }
}

export function* updateItem({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
       const {id, quan} = payload;
       let userToken = localStorage.userToken;
       yield CartApi.updateItem({id, quantity: quan, userToken})
       yield put({
           type: constants.UPDATE_CART_ITEM_SUCCESS,
        })
        let user = JSON.parse(localStorage.currentUser);
        yield put(fetchCartItems(user.id))
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.UPDATE_CART_ITEM_SUCCESS,
            payload: error
        });
    }
}

export function* deleteItem({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        const id = payload;
        let userToken = localStorage.userToken;
        yield CartApi.deleteItem({id, userToken})
        yield put({
           type: constants.DELETE_CART_ITEM_SUCCESS,
        });
        let user = JSON.parse(localStorage.currentUser);
        yield put(fetchCartItems(user.id))
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.DELETE_CART_ITEM_FALIURE,
            payload: error
        });
    }
}

export function* clearCart({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
       console.log(payload);
       let userToken = localStorage.userToken;
       yield CartApi.clearCart({userId: payload, userToken})
       yield put({
           type: constants.CLEAR_CART_SUCCESS,
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
            type: constants.CLEAR_CART_FALIURE,
            payload: error
        });
    }
}

export function* onFetchCartItemStart(){
    yield takeLatest(constants.FETCH_CART_ITEMS_START, fetchCart);
}
export function* onAddItemToCartStart() {
    yield takeLatest(constants.ADD_ITEM_TO_CART_START, addItem);
}
export function* onUpdateCartItemStart(){
    yield takeLatest(constants.UPDATE_CART_ITEM_START, updateItem);
}
export function* onDeleteItemFromCartStart() {
    yield takeLatest(constants.DELETE_CART_ITEM_START, deleteItem);
}
export function* onClearCartStart() {
    yield takeLatest(constants.CLEAR_CART_START, clearCart);
}

export function* cartSaga() {
    yield all([
       call(onFetchCartItemStart),
       call(onAddItemToCartStart),
       call(onUpdateCartItemStart),
       call(onDeleteItemFromCartStart),
       call(onClearCartStart),
    ]);
}