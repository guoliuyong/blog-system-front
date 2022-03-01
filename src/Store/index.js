/*
 * @Author: your name
 * @Date: 2022-02-24 19:20:55
 * @LastEditTime: 2022-03-01 16:23:47
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\index.js
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { counterReducer, postReducer, userReducer } from './reduces'
import GlobalReduces from './Global'
const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer,
  user: userReducer,
  global: GlobalReduces,
});

const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
store.subscribe((e) => {
  // this.setState(store.getState());
  console.log(e);
});
export default store
