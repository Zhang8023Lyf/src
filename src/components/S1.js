import React, { Component } from 'react'

export class S1 extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <button onClick={this.Fmsg.bind(this)}>+</button>
      </div>
    )
  }
  Fmsg () {
    this.props.val(1)

  }
}

export default S1
