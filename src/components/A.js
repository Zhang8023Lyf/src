import React, { Component } from 'react'
import B from "./B"
class componentName extends Component {
  constructor() {
    super()
    this.state = {
      msg: "A组件",
      val: ""
    }
  }
  render () {

    return (
      <div>
        <h1>组件A:接收到的值是{this.state.val}</h1>
        <B send={this.handleMsg.bind(this)}></B>
      </div>

    )
  }
  handleMsg (val) {
    this.setState({
      val: val
    })
  }
}

export default componentName
