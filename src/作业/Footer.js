import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <ul>
          <li>
            <Link to='/'>外卖
            <p><img src="../a.png" /> </p></Link>

          </li>
          <li>
            <Link to='/b'>发现
            <p><img src="../b.png" /> </p></Link>

          </li>
          <li>
            <Link to='/c'>订单
            <p><img src="../c.png" /> </p></Link>

          </li>
          <li>
            <Link to='/d'>我的
            <p><img src="../d.png" /> </p></Link>

          </li>

        </ul>
      </div>
    )
  }
}

export default Footer
