// /*
//  * @Author: your name
//  * @Date: 2022-02-07 15:49:42
//  * @LastEditTime: 2022-02-18 15:44:10
//  * @LastEditors: LAPTOP-L472H14P
//  * @Description: In User Settings Edit
//  * @FilePath: \blog_backStageSystem\blog_front\src\Pages\index.js
//  */
import React, { Component } from 'react'
import ContentHeader from '../Containers/ContentHeader'
import Main from '../Containers/main'
import ReactECharts from 'echarts-for-react'
export default class Home extends Component {
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }
  render() {
    return (
      <>
        <ContentHeader title="我的工作台"></ContentHeader>
        <Main>
          <ReactECharts option={this.option} />
        </Main>
      </>
    )
  }
}
