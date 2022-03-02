/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-03-02 17:52:59
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_system\src\Pages\Article\ArticleList.js
 */

import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import request from '../../api/index'
import store from '../../Store'
const ArticleList = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {})

  return (
    <div
      onClick={() => {
        request({
          url: 'v1/article/list',
          method: 'GET',
        })
      }}
    >
      文章首页
      <Button>跳转</Button>
      111
    </div>
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
