import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Layout, Avatar } from 'antd'
import request from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { openTab } from '../util/menTab'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  ToolOutlined,
  LogoutOutlined,
  EditOutlined,
} from '@ant-design/icons'
import storageSession from 'redux-persist/lib/storage/session'
import store from '../Store'
const { Header } = Layout
const AppHeader = (props) => {
  const { menuToggle, history } = props
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    request({
      url: '/v1/self',
    }).then((res) => {
      dispatch({
        type: 'UPDATE_USER',
        payload: res,
      })
    })
  }, [])
  /**
   * @description: 跳转个人中心
   * @param {*}
   * @return {*}
   */

  const intoUserInfo = () => {
    history.push('/user/userinfo')
    openTab({
      key: '/user/userinfo',
      path: '/user/userinfo',
      name: '个人中心',
    })
  }
  /**
   * @description: 退出登录
   * @param {*}
   * @return {*}
   */

  const loginOut = () => {
    localStorage.removeItem('token')
    // sessionStorage.clear();
    store.dispatch({ type: 'LOGIN_OUT' })
    storageSession.removeItem('persist:root')
    history.push('/login')
  }

  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item className="item" key="userinfo">
          <EditOutlined />
          <span style={{ marginLeft: '10px' }} onClick={() => intoUserInfo()}>
            个人设置
          </span>
        </Menu.Item>
        <Menu.Item key="system">
          <ToolOutlined />
          <span style={{ marginLeft: '10px' }}>系统设置</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="loout">
        <LogoutOutlined />
        <span onClick={loginOut} style={{ marginLeft: '10px' }}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className="header">
      <div className="left">
        {!menuToggle ? (
          <MenuFoldOutlined style={{ color: '#fff', fontSize: '16px' }} />
        ) : (
          <MenuUnfoldOutlined style={{ color: '#fff', fontSize: '16px' }} />
        )}
      </div>
      <div className="right">
        <div>
          <div className="ant-dropdown-link">
            <Avatar size={35} src={user.picUrl} style={{ cursor: 'pointer' }} />
          </div>
          {/*  */}
        </div>
        <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
          <div className="ant-dropdown-link">
            {user.realname || user.username} <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}

AppHeader.propTypes = {
  menuClick: PropTypes.func,
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  loginOut: PropTypes.func,
}

export default React.memo(AppHeader)
