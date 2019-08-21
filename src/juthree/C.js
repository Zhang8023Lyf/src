import React, { Component } from 'react'
import ev from "./ev"

export class C extends Component {
  sendData () {
    console.log(ev)
    ev.emit('changeMessage', 'hello A! I am C!')
  }
  render () {
    return (
      <div>
        <p>我是C组件</p>
        <button onClick={this.sendData.bind(this)}>向B组件传输数据</button>
      </div>
    )
  }
}

export default C
