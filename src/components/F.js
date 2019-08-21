import React, { Component } from 'react'
import S1 from "./S1"
import S2 from "./S2"
import "./../css/F.css"


export class F extends Component {
  constructor() {
    super()
    this.state = {
      msg: 1,
      list: { color: '' }
    }
  }
  render () {

    return (
      <div>
        <S1 val={this.Fn.bind(this)}></S1>
        <h1 style={this.state.list}>{this.state.msg}</h1>
        <S2 yyy={this.Ev.bind(this)}></S2>

        <button onClick={this.red.bind(this)}>红</button>
        <button onClick={this.black.bind(this)} >黑</button>
        <button onClick={this.blue.bind(this)} >蓝</button>

      </div>
    )
  }
  red () {
    this.setState({
      list: { color: 'red' }
    })
  }
  black () {
    this.setState({
      list: { color: 'black' }
    })
  }
  blue () {
    this.setState({
      list: { color: 'blue' }
    })
  }






  Fn (val) {
    this.setState({
      msg: this.state.msg + val
    })
  }
  Ev (yyy) {
    this.setState({
      msg: this.state.msg - yyy
    })
    if (this.state.msg <= 0) {
      this.setState({
        msg: 0
      })
    }
  }

}

export default F
