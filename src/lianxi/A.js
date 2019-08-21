import React, { Component } from 'react'
import B from "./B"
import propTypes from "prop-types"
import "./lian.css"
export class A extends Component {
  constructor() {
    super()
    this.state = {
      msg: "0"
    }
  }
  static childContextTypes = {  //static  用于声明  静态变量  （不是做逻辑处理的变量）
    message: propTypes.string, //数据验证  message  必须是字符串类型
    callback: propTypes.func,  //必须是函数类型
    callpp: propTypes.func  //必须是函数类型
  }
  getChildContext () {
    return {
      // message: "hello world!!!",
      callback: this.cb.bind(this),
      callpp: this.lit.bind(this)
    }
  }
  cb (val) {
    console.log(val)
    this.setState({
      msg: ++this.state.msg
    })
    // this.state.msg = val++;
  }
  lit (val) {
    console.log(val)
    this.setState({
      msg: --this.state.msg
    })
    if (this.state.msg <= 0) {
      this.setState({
        msg: 0
      })

    }
  }
  render () {
    return (
      <div>
        <h2>{this.state.msg}</h2>

        <B jian={this.state.msg}></B>
      </div>
    )
  }
}

export default A
