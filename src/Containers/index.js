/*
 * @Author: your name
 * @Date: 2022-02-07 17:22:10
 * @LastEditTime: 2022-02-28 20:23:47
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
    console.log("222222");
    // 给当前路由加入监听事件
     this.props.history.listen(location => {
       console.log(location);
       // 判断当前路由地址 和 发生变化后的 路由地址 是否一致
    //    if(this.props.location.pathname!==location.pathname){
    //      // 不一致的请情况下可以触发函数进行处理
    //      // this.function()
    //  }
     })
   }
 
  render() {
    const token = localStorage.getItem('token')
    const { tabs, activeKey, updateKey } = this.props
    console.log(activeKey)
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
                  >
                    Content of Tab Pane 1
                  </TabPane>
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
export default withRouter(connect(mapState, mapDispatch)(DefaultLayout))
