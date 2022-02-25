/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-02-24 19:39:08
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_system\src\Pages\Article\ArticleList.js
 */

import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import request from '../../api/index'
import store from '../../Store'
const ArticleList = (props) => {
  useEffect(() => {
    console.log(store.getState())
  })

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
          store.dispatch({
            type: 'COUNT_ADD',
            payload: {},
          })
        }}
      >
        跳转
      </Button>
      {
        store.getState().counter.count
      }
    </div>
  )
}
export default ArticleList
