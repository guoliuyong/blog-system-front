/*
 * @Author: your name
 * @Date: 2022-02-28 11:17:12
 * @LastEditTime: 2022-03-02 16:31:11
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Pages\User\UserInfo.js
 */
import React from 'react'
import {
  Form,
  Input,
  Divider,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd'
import { useSelector } from 'react-redux'

export default function UserInfo(props) {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 12,
      },
      sm: {
        span: 5,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  }
  const onFinish = (fieldsValue) => {
    console.log(fieldsValue)
  }
  const [form] = Form.useForm()
  const user = useSelector((state) => state.user)
  form.setFieldsValue({
    username: user.username,
    nickname: user.nickname,
    realname: user.realname,
    sex: user.sex,
    email: user.email,
    area: user.area,
  })
  console.log(props)
  return (
    <Form
      {...formItemLayout}
      // initialValues={{
      //   // username: user.username,
      //   nickname: user.nickname,
      //   realname: user.realname,
      //   sex: user.sex,
      //   email: user.email,
      //   area: user.area,
      // }}
      form={form}
      onFinish={onFinish}
      style={{
        margin: '0 auto',
      }}
    >
      <Form.Item name="username" label="用户名" >
        <Input disabled />
      </Form.Item>
      <Form.Item name="nickname" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="realname" label="真实姓名">
        <Input />
      </Form.Item>
      <Form.Item name="sex" label="性别">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="area" label="地区">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
