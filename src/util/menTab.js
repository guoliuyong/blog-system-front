/*
 * @Author: liuyong.guo
 * @Date: 2022-02-28 16:37:27
 * @LastEditTime: 2022-03-01 16:35:26
 * @LastEditors: LAPTOP-L472H14P
 * @Description: 菜单栏相关操作
 * @FilePath: \blog-system-front\src\util\menTab.js
 */

/**
 * 获得tab的数据
 */
function getTabData() {
  const state = window.reduxApp.getState()
  const { global: { tabs = [] } = {} } = state
  return tabs
}

/**
 * @description: 寻找新的tabkey是否已经存在于页签之上
 * @param {*} currentTab
 * @return {*}
 */
export function findTabKey(currentTab) {
  const tabs = getTabData()
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
export function replaceTab(tab) {
  const store = window.reduxApp
  store.dispatch({
    type: 'UPDATE_ACTIVE',
    payload: {
        activeKey:tab.key,
    },
  })
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
  } else{
    replaceTab(newTab)
    return false
  }
}
export function removeTab(key){
    console.log("删除", key);
    const tabs = getTabData();
    const store = window.reduxApp
    const index = tabs.findIndex(item=>item.key === key);
    if (index !== -1) {
        tabs.splice(index, 1);
        store.dispatch({
            type: "UPDATE_ACTIVE",
            payload: {
                activeKey: tabs[index-1].key,
                tabs,
            }
        })
    }
}
export function  sessionTabs(){
  const tabs = getTabData();
  sessionStorage.setItem("activeTabs", JSON.stringify(tabs));
}
// export function tabListen(pathname) {
//   const tabs = getTabData();
// }
