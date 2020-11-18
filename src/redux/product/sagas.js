import { takeLatest, put, all, call } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import constants from './constants';
import ProductApi from '../../api/product';

export function* fetchProductList({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        let {products} = yield ProductApi.fetchProductList({categoryId:payload})
        yield put({
            type: constants.FETCH_PRODUCT_LIST_SUCCESS,
            payload: products,
        });
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        console.log(error)
        yield put({
            type: constants.FETCH_PRODUCT_LIST_FAILURE,
            payload: error
        });
    }
}

export function* fetchProduct({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        let {product} = yield ProductApi.fetchProduct({id:payload})
        yield put({
            type: constants.FETCH_PRODUCT_SUCCESS,
            payload: product,
        });
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        console.log(error)
        yield put({
            type: constants.FETCH_PRODUCT_FALIURE,
            payload: error
        });
    }
}

export function* filter({payload}){
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        const {category_id, sub_category} = payload;
        let {products} = yield ProductApi.filterProduct({category_id, sub_category})
        yield put({
            type: constants.FILTER_PRODUCT_SUCCESS,
            payload: products,
        });
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
    }catch(error){
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        console.log(error)
        yield put({
            type: constants.FILTER_PRODUCT_FALIURE,
            payload: error
        });
    }
}

export function* onFetchProductListStart(){
    yield takeLatest(constants.FETCH_PRODUCT_LIST_START, fetchProductList);
}

export function* onFetchProductStart(){
    yield takeLatest(constants.FETCH_PRODUCT_START, fetchProduct);
}

export function* onFilterListStart() {
    yield takeLatest(constants.FILTER_PRODUCT_START, filter);
}

export function* productSaga() {
    yield all([
       call(onFetchProductListStart),
       call(onFetchProductStart),
       call(onFilterListStart),
    ]);
}