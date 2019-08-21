import React, { Component } from 'react'

export class live extends Component {
  constructor() {
    super()
    this.state = {
      msg: "测试生命周期",
      n: 0
    }
  }
  componentDidMount () {
    console.log("Didmount")
    setInterval(() => {
      this.setState({
        n: ++this.state.n
      })
    }, 1000)
  }
  componentWillMount () {
    console.log("将要更新数据")
  }
  // componentWillUpdate () {
  //   console.log("wWillUpdate")
  // }
  // componentDidUpdate () {
  //   console.log("DidUpdate")
  // }
  // componentWillUnmount () {
  //   console.log("WillUnmount")
  // }
  shouldComponentUpdate (nextProps, nextState) {
    // console.log("Should")
    if (nextState, n < 5) {
      return false
    } else {
      return true
    }
  }
  render () {
    console.log("render...")
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{this.state.msg}</h2>
        <p style={{ textAlign: "center" }}>{this.state.n}</p>
      </div>
    )
  }
}

export default live
