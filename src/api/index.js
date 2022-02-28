import { createBrowserHistory } from 'history'
import { notification } from 'antd'
import axios from 'axios'
// import { useHistory } from 'react-router-dom';
const history = createBrowserHistory()

export default function request(options) {
  // const history = useHistory();
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
  }
  const instance = axios.create({
    timeout: 5000,
    baseURL: 'http://127.0.0.1:5000',
  })
  // 处理请求头
  if (
    options.method === 'POST' ||
    options.method === 'PUT' ||
    options.method === 'DELETE' ||
    options.method === 'PATCH'
  ) {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    }
  } else {
    options.headers = {
      Accept: 'application/json',
      ...options.headers,
    }
  }

  // 为接口携带token
  const token = localStorage.getItem('token')
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `bearer ${token}`,
    }
  }
  const axiosPromise = instance(options)
    .then(checkStatus)
    .then((response) => {
      if (response.status === 204) {
        return {}
      }
      return response.data
    })
    .catch((e) => {
      if (e.response) {
        if (e.response.status === 401) {
          notification.error({
            message: 'token已过期或失效,请重新登录',
          })
          setTimeout(() => {
            window.reactRouter.push('/login')
          }, 1000)
        }
      } else {
        notification.error({
          message: '网络请求异常',
          description: '请稍后再试',
        })
        setTimeout(() => {
          window.reactRouter.push('/500')
        }, 1000)
      }
    })

  return axiosPromise
}
