/*
 * @Author: your name
 * @Date: 2022-02-24 19:20:55
 * @LastEditTime: 2022-02-28 20:47:30
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
const other = () =>{
  console.log(1433223);
}
const counter = (a) =>  {
  console.log(a);
  other()
 return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
 
}

const store = createStore(
  rootReducer,
  // compose(counter)
)
export default store
