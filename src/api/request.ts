// 二次封装axios api请求拦截
import axios, { AxiosInstance } from 'axios'
import { ApiList, ParamData, ApiUrl } from './types'
const BASE_NODE_BUILD: string = process.env.NODE_ENV

// 各个环境的api接口
const apiObj: ApiList = {
  api: {
    dev: '/api',
    test: '/test',
    prod: ''
  }
}
// 设置拦截器响应时间
const service: AxiosInstance = axios.create({
  timeout: 15000 // 请求时间
})

// 数据请求拦截
service.interceptors.request.use(
  config => {
    // 更改config 列：插入token
    return config
  },
  error => {
    // 错误处理
    Promise.reject(error)
  }
)
// 数据返回拦截
service.interceptors.response.use(
  res => {
    // 数据请求成功后 相应操作
    return res.data
  },
  error => {
    // 数据请求失败后的相应操作
    return error
  }
)

export function request (params: ParamData) {
  if (params.url.indexOf('http') === -1) {
    // 当地址为本项目地址
    const apiUrl: ApiUrl = apiObj.api
    params.url = apiUrl[BASE_NODE_BUILD] + params.url
  }
  return service(params)
}
