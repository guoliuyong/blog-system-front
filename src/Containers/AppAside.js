/*
 * @Author: your name
 * @Date: 2022-02-08 10:38:02
 * @LastEditTime: 2022-02-08 11:11:37
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Containers\AppAside.js
 */
import { GithubOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import CoustomMenu from './CutomMenu'
import './index.less'
const { Sider } = Layout
const AppAside = () => {
  return (
    <Sider className="my_sider">
      <div className="logo">
        <a
          rel="noopener noreferrer"
          href="https://github.com/ltadpoles"
          target="_blank"
        >
          <GithubOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
        </a>
      </div>
      <CoustomMenu />
    </Sider>
  )
}
export default AppAside
