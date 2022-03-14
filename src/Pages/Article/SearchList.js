/*
 * @Author: your name
 * @Date: 2022-03-10 20:34:43
 * @LastEditTime: 2022-03-14 17:01:53
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Pages\Article\SearchList.js
 */
import React, { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd'
import moment from 'moment'
const { Option } = Select
export default function SearchList(props) {
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false)
  const { initData } = props
  const getFields = () => {
    const count = expand ? 10 : 6
    const children = [
      <Col span={8} key="articleName">
        <Form.Item name="articleName" label="文章名称">
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>,
      <Col span={8} key="category">
        <Form.Item name="category" label="文章分类">
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>,
      <Col span={8} key="creationDate">
        <Form.Item name="creationDate" label="创建日期">
          <DatePicker placeholder="placeholder" />
        </Form.Item>
      </Col>,
    ]
    return children
  }
  const onFinish = (values) => {
    console.log(values);
    const params = {
      ...values,
      creationDate: values.creationDate ? moment(values.creationDate).format('YYYY-MM-DD') : null,
    }
    initData(params)
  }

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
            重置
          </Button>
          {getFields().length > 3 && (
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand)
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} 更多查询
            </a>
          )}
        </Col>
      </Row>
    </Form>
  )
}
