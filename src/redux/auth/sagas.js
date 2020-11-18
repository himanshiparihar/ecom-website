import { takeLatest, put, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import constants from './constants';
import UserApi from '../../api/user';

export function* signUp({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        const { Name, Phoneno, Address, City, State, Zipcode, email, password} = payload;
        let {token} = yield UserApi.customerSignUp({email, password});
        let {customer} = yield UserApi.createCustomer({ Name, Phoneno, Address, City, State, Zipcode, email });
        localStorage.setItem("currentUser", JSON.stringify(customer));
        localStorage.setItem("userToken", token);
        yield put({
            type: constants.SIGN_UP_SUCCESS,
        });
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put(push("/"));
    }catch(error) {
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.SIGN_UP_FAILURE,
            payload: error
        });
    }
}

export function* signIn({payload}) {
    try{
        yield put({
            type: constants.IS_LOADING,
            payload: true,
        });
        const {email, password} = payload;
        let {customer, token} = yield UserApi.customerSignIn({email, password})
        yield put({
            type:constants.SIGN_IN_SUCCESS,
        });
        localStorage.setItem("currentUser", JSON.stringify(customer));
        localStorage.setItem("userToken", token);
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put(push("/"));
    }catch(error){
        yield put({
            type: constants.IS_LOADING,
            payload: false,
        });
        yield put({
            type: constants.SIGN_IN_FAILURE,
            payload: error
        })
    }
}

export function* onSignUpStart(){
    yield takeLatest(constants.SIGN_UP_START, signUp);
}

export function* onSignInStart() {
    yield takeLatest(constants.SIGN_IN_START, signIn);
}

export function* authSaga() {
    yield all([
       call(onSignInStart),
       call(onSignUpStart),
    ]);
}