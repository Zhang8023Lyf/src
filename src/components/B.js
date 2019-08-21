import React, { Component } from 'react'

class componentName extends Component {
  constructor() {
    super()
    this.state = {
      msg: "B组件中的数据"

    }
  }
  handleClick () {
    this.props.send(this.state.msg)

  }
  render () {
    return (
      <div>
        <h2>B组件</h2>
        <button onClick={this.handleClick.bind(this)}>获取</button>
      </div >
    )
  }

}

export default componentName
