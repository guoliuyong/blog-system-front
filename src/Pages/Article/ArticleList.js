/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-03-14 20:19:58
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_system\src\Pages\Article\ArticleList.js
 */

import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import request from '../../api/index'
import store from '../../Store'
import ContentHeader from '../../Containers/ContentHeader'
import SearchList from './SearchList'
import Main from '../../Containers/main'
import moment from 'moment'

const ArticleList = (props) => {
  const dispatch = useDispatch()
  const [dataSoure, setDataSource] = useState([])
  useEffect(() => {
    initData()
  }, [])

  const initData = (data) => {
    request({
      url: 'v1/article/list',
      method: 'GET',
      params: data,
    }).then((res) => {
      const { content } = res
      setDataSource(content)
    })
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'userId',
      key: 'userId',
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      },
    },
    {
      title: '文章名称',
      dataIndex: 'articleName',
      key: 'articleName',
    },
    {
      title: '文章分类',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '创建日期',
      dataIndex: 'creationDate',
      key: 'creationDate',
      render: (value) => {
        return <span>{moment(value).format('YYYY-MM-DD')}</span>
      },
    },
  ]
  return (
    <>
      <ContentHeader title="文章列表管理">
        <Button>写文章</Button>
      </ContentHeader>
      <Main>
        <SearchList initData={initData} />
        <Table dataSource={dataSoure} columns={columns}></Table>
      </Main>
    </>
  )
}
const mapState = (state) => {
  return state.counter
}
const mapAction = (dispatch) => {
  return {
    countAdd: (data) => {
      dispatch({
        type: 'COUNT_ADD',
        payload: { data },
      })
    },
  }
}
export default connect(mapState, mapAction)(ArticleList)
