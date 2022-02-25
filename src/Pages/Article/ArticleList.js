/*
 * @Author: your name
 * @Date: 2022-02-22 16:30:24
 * @LastEditTime: 2022-02-24 16:56:27
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_system\src\Pages\Article\ArticleList.js
 */

import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import request from '../../api/index'
const ArticleList = (props) => {
  useEffect(() => {
  
  })

  return <div onClick={()=>{
    request({
        url: 'v1/article/list',
        method: 'GET',
      })
  }}>
      文章首页
      <Button onClick={()=>window.history.replaceState({},'','/login')}>跳转</Button>
  </div>
}
export default ArticleList
