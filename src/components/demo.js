import React, { Component } from 'react'
import ".././css/demo.css"

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      val: "",
      val1: ""

    }
    this.add = this.add.bind(this)
    this.getInputValue = this.getInputValue.bind(this)
    this.inputmi = this.inputmi.bind(this)
  }

  add () {

    // var reg = /^[A-z][1-9]{5,10}$/
    // if (this.state.val.length == 11 && this.state.val1.length == 6) {
    //   alert("登录成功")
    // } else {
    //   alert("登录失败")
    // }

  }

  inputmi (v) {

    // console.log(v.target.value)
    // this.setState({
    //   val1: v.target.value

    // })

  }
  getInputValue (e) {
    // console.log(e.target.value)
    // this.setState({
    //   val: e.target.value
    // })

  }
  render () {
    return (
      <div>
        <div className="header">
          <img src={require('.././css/8.jpg')} />
        </div>
        <div className="con">
          <p>欢迎登陆手机知网</p>
        </div>
        <div className="con1">
          <input type="text" placeholder="请输入用户名" onChange={this.getInputValue} />
          <input type="text" placeholder="请输入密码" onChange={this.inputmi} />
          <span>忘记密码？</span>
        </div>
        <div className="con2">
          <button onClick={this.add}>登录</button>
        </div>
        <div className="con3">
          <button>新用户注册</button>
        </div>
        <div className="foot">
          <div>
            <img src={require('.././css/e.png')} />
            <p>微博</p>
          </div>
          <div><img src={require('.././css/d.png')} />
            <p>QQ</p></div>

        </div>
      </div>
    )
  }
}

export default Demo
