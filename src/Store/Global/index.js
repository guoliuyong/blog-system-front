/*
 * @Author: your name
 * @Date: 2022-02-28 15:58:03
 * @LastEditTime: 2022-03-03 14:38:49
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Store\Global\index.js
 */
const globalState = {
  activeKey: '/index',
  tabs: [
    {
      key: '/index',
      path: '/index',
      title: '首页',
    },
  ],
}
function GlobalReduces(state = globalState, action) {
  switch (action.type) {
    case 'OPEN_TAB':
      const { tabs } = state
      const { payload } = action
      tabs.push(payload)
      return {
        ...state,
        tabs,
        activeKey: payload.key,
      }
    case 'UPDATE_ACTIVE':
      return {
        ...state,
        ...action.payload,
      }
    case 'LOGIN_OUT':
      return {
        activeKey: '/index',
        tabs: [
          {
            key: '/index',
            path: '/index',
            title: '首页',
          },
        ],
      }
    default:
      return state
  }
}
export default GlobalReduces
