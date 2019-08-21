import React, { Component } from 'react'
import propTypes from "prop-types"

export class C extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount () {

  }
  static contextTypes = {  //static  用于声明  静态变量  （不是做逻辑处理的变量）
    message: propTypes.number, //数据验证  message  必须是字符串类型
    callback: propTypes.func  //必须是函数类型
  }
  cb () {
    this.context.callback(
      // "C组件传递的+"
    )
  }
  render () {
    return (
      <div>
        <button onClick={this.cb.bind(this)}>+</button>
      </div>
    )
  }
}

export default C
