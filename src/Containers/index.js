/*
 * @Author: your name
 * @Date: 2022-02-07 17:22:10
 * @LastEditTime: 2022-02-24 17:21:18
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Containers\index.js
 */
import React, { Component } from 'react'
import { Layout } from 'antd'
import AppAside from './AppAside'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.less'
import { routerConfig } from '../routers/router'
import HeaderJS from './Header'
const { Content } = Layout;
export default class DefaultLayout extends Component {
  componentDidMount() {
    console.log('开发')
  }
  render() {
    const token = localStorage.getItem('token');
    console.log(token);
    return (
      <Layout>
        <AppAside />
        <Layout>
          <HeaderJS className="header"></HeaderJS>
          <Content className="content">
            <Switch>
              {token ? (
                routerConfig.map((d) => {
                  return d.routes ? (
                    d.routes.map((item) => (
                      <Route
                        path={item.path}
                        component={item.component}
                        key={item.key}
                      ></Route>
                    ))
                  ) : (
                    <Route
                      path={d.path}
                      component={d.component}
                      key={d.key}
                    ></Route>
                  )
                })
              ) : (
                <Redirect to="/login" />
              )}
            </Switch>

            {/* <Outlet /> */}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
