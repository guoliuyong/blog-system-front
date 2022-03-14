/*
 * @Author: your name
 * @Date: 2022-02-07 16:20:19
 * @LastEditTime: 2022-03-14 17:13:31
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\routers\router.js
 */
import ArticleList from '../Pages/Article/ArticleList'
import UserList from '../Pages/User'
import UserInfo from '../Pages/User/UserInfo'
import ArticleCategory from '../Pages/Article/article_caterory'
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
        component: ArticleList,
      },
      {
        path: '/article/category',
        name: '标签管理',
        component: ArticleCategory,
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
      {
        path: '/user/userinfo',
        name: '个人中心',
        component: UserInfo,
      },
    ],
  },
]
