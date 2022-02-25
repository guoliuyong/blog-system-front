/*
 * @Author: your name
 * @Date: 2022-02-08 16:37:17
 * @LastEditTime: 2022-02-24 16:22:53
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Pages\Login\index.js
 */
import { Layout, Divider, Form, Input, Button, notification } from 'antd'
import  './index.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import request from '../../api/index'

// import { withRouter } from 'react-router-dom'
import { useState } from 'react'
const Login = (props) => {
  const [buttonStatus, setButtonStatus] = useState(true)
  const {history} = props;
   console.log(props);
  // 登录注册
  const onFinish = (values) => {
    buttonStatus ? handleLogin(values) : handleResgiter(values)
  }
  const handleLogin = (value) => {
    request({
      method: 'GET',
      url: '/api/login',
      params: value,
    }).then((res) => {
      if (res.failed) {
        notification.open({
          message: res.message,
        })
      } else {
        notification.open({
          message: '登录成功',
        })
        localStorage.setItem('token', res.token)
        history.push('/')
      }
    })
  }
  const handleResgiter = (value) => {
    request({
      method: 'POST',
      url: '/api/register',
      data: value,
    }).then((res) => {
      if (res.failed) {
        notification.open({
          message: res.message,
        })
      } else {
        notification.open({
          message: '登录成功',
        })
        localStorage.setItem('token', res.token)
        history.push('/')
      }
    })
  }
  return (
    <Layout className="login animated fadeIn">
      <div className="model">
        <div className="login-form">
          <h3>后台管理系统</h3>
          <Divider />
          <Form
            name="normal_login"
            // className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'right' }}>
              <Button type="link" onClick={() => setButtonStatus(false)}>
                还没账号?去注册
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {buttonStatus ? '登录' : '注册'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
