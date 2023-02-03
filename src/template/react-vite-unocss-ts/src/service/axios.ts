import Axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';
import storage from '@/utils/storage';

export const API_URL = 'https://nc.broas.com.cn'

const createAxiosInstance = (baseURL:string):AxiosInstance => {
  const instance = Axios.create({
    baseURL: baseURL,
    timeout: 100000,
    // method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-session-token':''
    },
    responseType: 'json',
  });
//request interceptors-请求拦截器
  instance.interceptors.request.use(
    (config) => {
      config.headers['x-session-token'] = storage.getItem('token');
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  
  //response interceptors-相应拦截器
  instance.interceptors.response.use(
    (response) => {
      return response.data;
      // 在这里你可以判断后台返回数据携带的请求码
      // if (response.status === 200) {
      //   return response.data;
      // } else {
      // }
    },
    (err) => {
      const message = err.message;
      if (message.indexOf(401) > -1) {
        // return redirect('/imc/login')
        // window.location.replace('/401');
        // store.dispatch({ type: types.CLEAR_MESSAGE });
      }
      // if (message.indexOf(403) > -1) {
      //   history.replace(`/${siteConfig.siteDomain}/403`);
      // }
      return Promise.reject(err);
    }
  );
  
  return instance;
}

export const axios = createAxiosInstance(API_URL)

export default <T = any>(url:string,data?:any,config?: AxiosRequestConfig) => {
  return axios.post(url, data, config).then(res => {
    console.log(res,'axios res')
    return (res.data.data || res.data) as T
  })
}
