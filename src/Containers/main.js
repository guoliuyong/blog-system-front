/*
 * @Author: your name
 * @Date: 2022-03-03 19:51:54
 * @LastEditTime: 2022-03-03 19:53:37
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Containers\main.js
 */
import React from 'react'
import "./index.less"
export default function Main(props) {
  return (
    <div className='content_main'>{props.children}</div>
  )
}
