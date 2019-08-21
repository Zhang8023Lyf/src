import React, { Component } from 'react'
import ev from "./ev"


export class B extends Component {
  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }
  componentDidMount () {
    this.events = ev.addListener('changeMessage', (message) => {
      console.log(message)
    })
  }
  componentWillUnmount () {
    ev.removeListener(this.events);
  }
  render () {
    return (
      <div>
        <p>我是B组件</p>
      </div>
    )
  }
}

export default B