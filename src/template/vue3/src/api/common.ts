/**
 * @description 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from '@/api/types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/dev/login/info'
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/dev/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob'
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/dev/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/dev/setting/admin/logout'
  })
}
