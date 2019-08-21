import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"

export class B extends Component {
  render () {
    return (
      <div>
        <h2>B组件</h2>
        <Link to="/seach">跳到别的页面</Link>
      </div>
    )
  }
}

export default B
