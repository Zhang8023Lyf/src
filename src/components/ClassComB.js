import React, { Component } from 'react'

export class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      msg: "hello"
    }

  }
  render () {
    return (
      <div>
        {/* {this.state.msg}
        {this.props.name} */}
      </div>
    )
  }
}

export default ClassCom
