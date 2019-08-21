import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


export class D extends Component {
  render () {
    return (
      <div>
        <Link to='/my'>我的页面</Link>
        <Link to='/dd'>我的2页面</Link>
      </div>
    )
  }
}

export default D
