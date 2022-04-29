import { all } from 'redux-saga/effects'
import {watchJoin, watchLogin, watchLogout, watchDelUser, watchEditUser} from './userSaga.ts'

export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchLogout(), watchDelUser(), watchEditUser()])
}
