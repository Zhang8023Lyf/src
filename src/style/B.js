import React, { Component } from 'react'
import C from "./C"

export class B extends Component {
  render () {
    return (
      <div>
        我是B组件
        <C></C>
      </div>
    )
  }
}

export default B
