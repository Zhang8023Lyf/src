import React, { Component } from 'react'
import ClassComB from "./ClassComB"
export class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      msg: "hello react",
      n: 0
    }
    this.add = this.add.bind(this);
  }
  add () {
    this.setState({
      n: ++this.state.n
    })
  }
  render () {
    return (
      <div>
        {this.state.n}<button onClick={this.add}>+</button>
      </div>
    )
  }
}
export default ClassCom
