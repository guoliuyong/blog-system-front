/*
 * @Author: your name
 * @Date: 2022-02-07 17:22:10
 * @LastEditTime: 2022-03-04 17:26:17
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog_backStageSystem\blog_front\src\Containers\index.js
 */
import React, { Component } from 'react'
import { Layout, Tabs, Dropdown, Menu } from 'antd'
import { removeTab, removeAllTab } from '../util/menTab'
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

  renderContextMenu(d) {
    console.log(d)
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={() => Windows.location.reload()}>
          刷新
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={(e) => {
            e.domEvent.stopPropagation()
            removeTab(d.path)
          }}
        >
          关闭
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={(e) => {
            e.domEvent.stopPropagation()
            // removeAll()
          }}
        >
          关闭其他
        </Menu.Item>
        <Menu.Item
          key="4"
          onClick={(e) => {
            e.domEvent.stopPropagation()
            removeAllTab()
            this.props.history.push('/')
          }}
          // disabled={isDisabled()}
        >
          全部关闭
        </Menu.Item>
      </Menu>
    )
    return menu
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
                    tab={
                      <Dropdown
                        overlay={this.renderContextMenu(d)}
                        placement="bottomLeft"
                        trigger={['contextMenu']}
                        key={d.path}
                      >
                        <span>{d.title}</span>
                      </Dropdown>
                    }
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
