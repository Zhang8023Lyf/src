import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'



import { Provider } from 'react-redux'
import store from './redux购物车/store/myStore'
ReactDOM.render(
  //把 store 的数据 和跟组件App 关联起来
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'));

