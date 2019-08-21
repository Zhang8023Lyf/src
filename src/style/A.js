import React, { Component } from 'react'
import B from "./B"
import propTypes from "prop-types"
export class A extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  static childContextTypes = {  //static  用于声明  静态变量  （不是做逻辑处理的变量）
    message: propTypes.string, //数据验证  message  必须是字符串类型
    callback: propTypes.func  //必须是函数类型
  }
  getChildContext () {
    return {
      // message: "hello world!!!",
      callback: this.cb.bind(this)
    }
  }
  cb (val) {
    console.log(val)
    this.state.msg = val;
    this.setState({
      msg: this.state.msg
    })
  }
  render () {
    return (
      <div>
        我是A组件:{this.state.msg}
        <B></B>
      </div>
    )
  }
}

export default A
