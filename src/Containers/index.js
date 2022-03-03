/*
 * @Author: your name
 * @Date: 2022-02-07 17:22:10
 * @LastEditTime: 2022-03-03 20:03:31
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Containers\index.js
 */
import React, { Component } from 'react'
import { Layout, Tabs } from 'antd'
import { removeTab } from '../util/menTab'
// import  {removeTab}  from "../util/menuTab.js"
import AppAside from './AppAside'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.less'
import { routerConfig } from '../routers/router'
import HeaderJS from './Header'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Main from './main'
const { Content, Header } = Layout
const { TabPane } = Tabs
const mapState = ({ global }) => {
  return global
}
const mapDispatch = (dispatch) => {
  return {
    updateKey: (key) => {
      dispatch({
        type: 'UPDATE_ACTIVE',
        payload: {
          activeKey: key,
        },
      })
    },
  }
}

class DefaultLayout extends Component {
  componentDidMount() {
    this.props.history.listen(() => {
      console.log('加载')
    })
  }
  render() {
    const token = localStorage.getItem('token')
    const { tabs, activeKey, updateKey, history } = this.props
    return (
      <Layout style={{ height: '100%' }}>
        <AppAside />
        <Layout>
          <HeaderJS className="header" history={this.props.history}></HeaderJS>
          <Content className="content">
            <Tabs
              activeKey={activeKey}
              type="editable-card"
              hideAdd
              onChange={(key) => {
                updateKey(key)
                history.push(key)
              }}
              onEdit={(key) => {
                removeTab(key)
              }}
            >
              {tabs.map((d) => {
                return (
                  <TabPane
                    tab={d.title}
                    key={d.path}
                    closable={d.key === '/index' ? false : true}
                  ></TabPane>
                )
              })}
            </Tabs>
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
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect(mapState, mapDispatch)(DefaultLayout)
