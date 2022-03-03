/*
 * @Author: your name
 * @Date: 2022-02-24 19:33:20
 * @LastEditTime: 2022-03-03 14:26:39
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\reduces.js
 */
const userReducer = function (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      const data = action.payload
      return {
        ...state,
        ...data
      }
    default:
      return state
  }
}
export {userReducer }
