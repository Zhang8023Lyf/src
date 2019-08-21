import React, { Component } from 'react'
import propTypes from "prop-types"

export class C extends Component {
  constructor() {
    super()
    this.state = {
      msg: ""
    }
  }
  componentDidMount () {
    console.log(this.context)
    this.state.msg = this.context.message;
    this.setState({
      msg: this.state.msg
    })
  }
  static contextTypes = {  //static  用于声明  静态变量  （不是做逻辑处理的变量）
    message: propTypes.string, //数据验证  message  必须是字符串类型
    callback: propTypes.func  //必须是函数类型
  }
  cb () {
    this.context.callback("C组建传递过来的数据")
  }
  render () {
    return (
      <div>
        我是C组件
        <p>A组件传递过来的数据:{this.state.msg}</p>
        <button onClick={this.cb.bind(this)}>传递</button>
      </div>
    )
  }
}

export default C