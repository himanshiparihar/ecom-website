import { takeLatest, put, all, call } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import constants from './constants';
import CategoryApi from '../../api/category';

export function* fetchCategory() {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
       let {categories} = yield CategoryApi.fetchCategory();
       yield put({
           type: constants.FETCH_CATEGORIES_SUCCESS,
           payload: categories,
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
            type: constants.FETCH_CATEGORIES_FAILURE,
            payload: error
        });
    }
}

export function* onFetchCategoryStart(){
    yield takeLatest(constants.FETCH_CATEGORIES_START, fetchCategory);
}

export function* categorySaga() {
    yield all([
       call(onFetchCategoryStart),
    ]);
}