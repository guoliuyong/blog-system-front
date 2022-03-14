/*
 * @Author: liuyong.guo
 * @Date: 2022-02-28 16:37:27
 * @LastEditTime: 2022-03-14 11:12:57
 * @LastEditors: LAPTOP-L472H14P
 * @Description: 菜单栏相关操作
 * @FilePath: \blog-system-front\src\util\menTab.js
 */

/**
 * 获得tab的数据
 */
function getTabData() {
  const state = window.reduxApp.getState()
  const { global: { tabs = [], activeKey } = {} } = state
  return { tabs, activeKey }
}

/**
 * @description: 寻找新的tabkey是否已经存在于页签之上
 * @param {*} currentTab
 * @return {*}
 */
export function findTabKey(currentTab) {
  const { tabs } = getTabData()
  let tab = null
  tabs.forEach((d) => {
    if (d.key === currentTab.key) {
      tab = d
    }
  })
  return tab
}

/**
 * @description: 替换当前激活tab
 * @param {*} tab
 * @return {*}
 */
export function replaceTab(key) {
  const store = window.reduxApp
  store.dispatch({
    type: 'UPDATE_ACTIVE',
    payload: {
      activeKey: key,
    },
  })
  window.reactRouter.push(key)
}

/**
 * @description: 开启一个新tab,不能再当前tab在开启tab，
 * @param {*} newTab
 * @return {*}
 */
export function openTab(newTab) {
  const { key, path = key, name } = newTab
  const store = window.reduxApp
  const oldTab = findTabKey(newTab)
  if (!oldTab) {
    store.dispatch({
      type: 'OPEN_TAB',
      payload: {
        key,
        path,
        title: name,
      },
    })
  } else {
    replaceTab(key)
    return false
  }
}

/**
 * @description: 关闭tab，主逻辑,非最后一个tab，依次向后active
 * @param {*} key
 * @return {*}
 */
export function removeTab(key) {
  const { tabs, activeKey } = getTabData()
  let newTabs = []
  const len = tabs.length - 1
  const store = window.reduxApp
  let newActiveKey = ''
  let nextActiveIndex = 0
  tabs.forEach((item, index) => {
    console.log(index)
    if (item.key !== key) {
      newTabs.push(item)
    } else {
      nextActiveIndex = index
    }
  })
  if (activeKey === key) {
    if (nextActiveIndex === len) {
      newActiveKey = newTabs[newTabs.length - 1].key
    } else {
      newActiveKey = newTabs[nextActiveIndex].key
    }
    replaceTab(newActiveKey)
  }
  store.dispatch({
    type: 'UPDATE_ACTIVE',
    payload: {
      tabs: newTabs,
    },
  })
}

export function sessionTabs() {
  const { tabs } = getTabData()
  sessionStorage.setItem('activeTabs', JSON.stringify(tabs))
}
export function removeAllTab() {
  const store = window.reduxApp
  const { tabs } = getTabData()
  return store.dispatch({
    type: 'UPDATE_ACTIVE',
    payload: {
      activeKey: '/index',
      tabs: [tabs[0]],
    },
  })
}
