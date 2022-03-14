/*
 * @Author: your name
 * @Date: 2022-02-24 19:20:55
 * @LastEditTime: 2022-03-11 11:19:43
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\index.js
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './reduces'
import GlobalReduces from './Global'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const storageConfig = {
  key: 'root', // 必须有的
  storage: storageSession, // 缓存机制
  blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
}
const rootReducer = combineReducers({
  user: userReducer,
  global: GlobalReduces,
})
const myPersistReducer = persistReducer(storageConfig, rootReducer)

const store = createStore(
  myPersistReducer,
  applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(mySaga)
export const persistor = persistStore(store)
export default store
