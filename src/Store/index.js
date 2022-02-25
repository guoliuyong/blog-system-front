/*
 * @Author: your name
 * @Date: 2022-02-24 19:20:55
 * @LastEditTime: 2022-02-24 19:35:13
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\index.js
 */
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { counterReducer,postReducer  } from './reduces';
const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer
  })
  const store = createStore(
    rootReducer,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
// import { createStore } from 'redux';
// function counter(state = 222, action) {
//     switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//     }
//   }
//   let store = createStore(counter);
  export default store;  