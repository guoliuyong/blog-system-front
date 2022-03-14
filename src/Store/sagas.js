/*
 * @Author: your name
 * @Date: 2022-03-11 11:09:11
 * @LastEditTime: 2022-03-11 15:25:16
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\sagas.js
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUserInfo,login } from '../Services/global/global';

function* fetchUserInfoRequest() {
  try {
    const user = yield call(fetchUserInfo);
    yield put({ type: 'UPDATE_USER', user })
  } catch (e) {
    throw e
  }
}
function* loginRequest(action) {
    const {payload} = action;
    try {
      const user = yield call(login, payload);
      return user;
    //   yield put({ type: 'UPDATE_USER', user })
    } catch (e) {
      throw e
    }
  }
function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUserInfoRequest)
  yield takeLatest('LOGIN_REQUESTED', loginRequest)
}
export default mySaga
