import {PayloadAction} from '@reduxjs/toolkit'
import {call, delay, put, takeLatest} from 'redux-saga/effects'
import {userActions} from '../reducers/userReducer.ts';
import {joinApi, loginApi, logoutApi, delUserApi} from '../api/userApi.ts'

interface UserJoinType {
    type: string;
    payload: {
        userid: string,
        password: string,
        email: string,
        name: string,
        phone: string,
        birth: string,
        address: string
    }
}
interface UserJoinSuccessType {
    type: string;
    payload: {
        userid: string
    }
}
interface UserLoginType {
    type: string;
    payload: {
        userid: string,
        password: string
    }
}
interface UserLogoutType {
    type: string;
    payload: {
        userid: string,
        password: string
    }
}
interface UserDelType {
    type: string;
    payload: {
        userid: string,
        password: string
    }
}
interface UserLoginSuccessType {
    type: string;
    payload: {
        userid: string,
        password: string,
        email: string,
        name: string,
        phone: string,
        birth: string,
        address: string
    }
}

function* join(user : UserJoinType) {
    try {
        alert(' 진행 3: saga내부 join 성공  ' + JSON.stringify(user))
        const response: UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    } catch (error) {
        alert('진행 3: saga내부 join 실패  ')
        yield put(userActions.joinFailure(error))
    }
}
function* login(user : UserLoginType) {
    try {
        alert('진행 3: saga내부 login 성공  ')
        const response: UserLoginSuccessType = yield loginApi(user.payload)
        yield put(userActions.loginSuccess(response))
    } catch (error) {
        alert(error)
        alert('진행 3: saga내부 login 실패  ')
        yield put(userActions.loginFailure(error))
    }
}
function* logout(user : UserLogoutType) {
    alert('진행 3: saga내부 logout 성공  ')
    const response: UserLogoutType = yield logoutApi(user.payload)
    yield put(userActions.logoutSuccess(response))
}
function* delUser(user : UserDelType) {
    try {
        alert('진행 3: saga내부 delUser 성공  ')
        const response: UserDelType = yield delUserApi(user.payload)
        yield put(userActions.delUserSuccess(response))
    } catch (error) {
        alert(error)
        alert('진행 3: saga내부 delUser 실패  ')
        yield put(userActions.delUserFailure(error))
    }
}
export function* watchJoin() {
    // alert('진행 2.5: wahtchJoin')
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin() {
    // alert('진행 2.5: wahtchLogin')
    yield takeLatest(userActions.loginRequest, login)
}
export function* watchLogout() {
    // alert('진행 2.5: wahtchLogout')
    yield takeLatest(userActions.logoutRequest, logout)
}
export function* watchDelUser() {
    // alert('진행 2.5: watchDelUser')
    yield takeLatest(userActions.delUserRequest, delUser)
}