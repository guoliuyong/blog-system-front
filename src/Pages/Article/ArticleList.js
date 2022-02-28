/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-02-25 16:43:10
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
  const value = useSelector(state => state.counter.count)
  const dispatch = useDispatch();
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
      <Button
        onClick={() => {
          dispatch({
            type: 'COUNT_ADD',
            payload: {data: 2},
          })
          // props.countAdd(2)
        }}
      >
        跳转
      </Button>
      {value}
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
        payload: {data},
      })
    },
  }
}
export default connect(mapState,mapAction)(ArticleList)
