import React, { Component } from 'react'
import { Icon } from 'antd';
export class header extends Component {
  render () {
    return (
      <div className="header">
        <span>
          <Icon type="unordered-list" />首页
        </span>

        <span>退出登录</span>

      </div>
    )
  }
}

export default header
