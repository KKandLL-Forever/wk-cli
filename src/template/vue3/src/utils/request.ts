/**
 * @description axios封装
 **/
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  const status = response.data.status

  // 正确的情况
  if (!status || status === 200) {
    return response
  }

  // 特殊错误情况分别处理
  // 例子
  if (status === 410000) {
    ElMessageBox.confirm('您的登录已过期，您可以点击取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
    }).finally(() => {})

    // 在内部消化掉这个业务异常
    return Promise.reject(response)
  }

  // 其它错误情况
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  // 手动返回一个 Promise 异常
  return Promise.reject(response)
}, function (error) {
  ElMessage.error(error.message || '请求失败，请稍后重试')
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
