/*
 * @Author: your name
 * @Date: 2022-03-14 17:08:54
 * @LastEditTime: 2022-03-14 20:09:03
 * @LastEditors: LAPTOP-L472H14P
 * @Description: 文件标签管理
 * @FilePath: \blog-system-front\src\Pages\Article\article_caterory\index.js
 */

import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import ContentHeader from '../../../Containers/ContentHeader'
import Main from '../../../Containers/main'
import request from '../../../api'
export default function ArticleCategory() {
  const [dataSoure, setDataSource] = useState([])
  const columns = [
    {
      title: '序号',
      dataIndex: 'category_id',
      key: 'category_id',
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      },
    },
    {
      title: '标签名称',
      dataIndex: 'category_name',
      key: 'category_name',
    },
    {
      title: '文章数量',
      dataIndex: 'category_count',
      key: 'category_count',
    },
    {
      title: '操作',
      //   dataIndex: 'category_count',
      key: 'operation',
      render: () => {
        return <a>编辑</a>
      },
    },
  ]
  useEffect(() => {
    initData()
  }, [])
  const initData = () => {
    request({
      url: 'v1/article/category',
      method: 'GET',
    }).then((res) => {
      setDataSource(res.content)
    })
  }
  return (
    <>
      <ContentHeader title="标签管理">
        <Button color="primary">新建</Button>
      </ContentHeader>
      <Main>
        <Table dataSource={dataSoure} columns={columns} bordered></Table>
      </Main>
    </>
  )
}
