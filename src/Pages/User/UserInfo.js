/*
 * @Author: your name
 * @Date: 2022-02-28 11:17:12
 * @LastEditTime: 2022-03-04 15:37:35
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
import request from '../../api'
import ContentHeader from '../../Containers/ContentHeader'
import Main from '../../Containers/main'
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

  const [form] = Form.useForm()
  const user = useSelector((state) => state.user)
  form.setFieldsValue({
    username: user.username,
    nickname: user.nickname,
    realname: user.realname,
    sex: user.sex,
    email: user.email,
    area: user.area,
    telphone: user.telphone,
  })
  const onFinish = (fieldsValue) => {
    const data = {
      ...fieldsValue,
      userId: user.userId,
    }
    console.log(data)
    request({
      method: 'POST',
      url: 'v1/update/userlist',
      data,
    })
  }
  const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 } }
  return (
    <>
      <ContentHeader title="个人中心"></ContentHeader>
      <Main>
        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          style={{
            margin: '0 auto',
          }}
        >
          <Form.Item name="username" label="用户名">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="telphone"
            label="电话号码"
            rules={[
              {
                pattern: /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/,
                message: '请输入手机号',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="nickname" label="昵称">
            <Input />
          </Form.Item>
          <Form.Item name="realname" label="真实姓名">
            <Input />
          </Form.Item>
          <Form.Item name="sex" label="性别">
            <Select>
              <Select.Option value="male">男</Select.Option>
              <Select.Option value="famale">女</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '请输入有效的邮箱',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="area" label="地区">
            <Input />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Main>
    </>
  )
}
