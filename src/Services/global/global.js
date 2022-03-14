/*
 * @Author: your name
 * @Date: 2022-03-11 11:11:53
 * @LastEditTime: 2022-03-11 11:35:45
 * @LastEditors: LAPTOP-L472H14P
 * @Description: In User Settings Edit
 * @FilePath: \blog-system-front\src\Services\global.js
 */
import request from '../../api'
/**
 * @description: 请求用户信息
 * @param {*} 后端采用token解析,无需传递username
 * @return {*}
 */
export async function fetchUserInfo() {
  return request({
    url: '/v1/self',
  })
}

export async function login(payload) {
    return  request({
    method: 'GET',
    url: '/api/login',
    params: payload,
  })
}
