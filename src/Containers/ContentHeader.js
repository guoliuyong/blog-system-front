/*
 * @Author: your name
 * @Date: 2022-03-03 19:58:36
 * @LastEditTime: 2022-03-03 20:01:45
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Containers\ContentHeader.js
 */
import React from 'react'

export default function ContentHeader(props) {
  const { title, children } = props
  return (
    <div className='content_header'>
      <div className="left_header">{title}</div>
      <div className="right_header">{children}</div>
    </div>
  )
}
