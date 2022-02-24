/*
 * @Author: your name
 * @Date: 2022-02-07 16:20:19
 * @LastEditTime: 2022-02-21 15:41:24
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\routers\router.js
 */
import Home from '../Pages/index'
import UserList from '../Pages/User'
export const routerConfig = [
  // 文章管理
  {
    path: '/article',
    key: 'article',
    name: '文章管理',
    routes: [
      {
        path: '/article/list',
        name: '文章列表',
        component: Home,
      },
    ],
  },
  {
    path: '/user',
    key: 'user',
    name: '用户管理',
    routes: [
      {
        path: '/user/list',
        name: '用户列表',
        component: UserList,
      },
    ],
  },
]
