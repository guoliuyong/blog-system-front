/*
 * @Author: your name
 * @Date: 2022-02-24 19:33:20
 * @LastEditTime: 2022-02-24 19:49:45
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\reduces.js
 */
const counterReducer = function (state = { count: 1 }, action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state,
        count: state.count + 1,
      }

    case 'COUNT_REDUCE':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}

const postReducer = function (state = { list: [{ title: '你好' }] }, action) {
  switch (action.type) {
    case 'LOAD_POST':
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}
export { counterReducer, postReducer }
