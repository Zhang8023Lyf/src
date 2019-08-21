import reduxStore from './data'; // Data 就是我们刚刚声明的数据

import {combineReducers} from 'redux';
let rootReducer = combineReducers({reduxStore});// 中间件
export default rootReducer;


