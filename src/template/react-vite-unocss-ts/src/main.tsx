import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import store from './store'
import '@/styles/leaflet-custom.css';
import '@/styles/common.less'

import './main.less'
import 'virtual:uno.css'
import App from './App'
import Boot from '@/store/boot';
import Page404 from "@/pages/ErrorPages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/map",
        element: <div>123</div>,
      },
    ],
  },
]);

const root = document.getElementById('root') as HTMLElement;

const RootApp = () => (
  <ConfigProvider locale={ zhCN }>
    <Provider store={ store }>
      <RouterProvider router={router}/>
    </Provider>
  </ConfigProvider>
)
Boot().then(() => RootApp)
ReactDOM.render(
  <RootApp/>,
  root
)
