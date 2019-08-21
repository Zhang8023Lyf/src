import React from 'react';
import { login } from './api/login'
import { fetchList } from './api/produt'
import * as Cookie from './utils/cookie'
import { Link, Route } from 'react-router-dom'
import { Input, Icon, Button, Tooltip, message } from 'antd';
import "./utils/login.css"
export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      info: '',
      padInfo: '',
      userName: "",
      psd: "",
      ajaxDone: true,
      userNameReg: false,
      padReg: false,
      showUserNameInfo: { display: 'none' },
      showPsdInfo: { display: 'none' }
    }
  }
  // 接口都要封装   
  deng () {
    // let data = { username: 'admin', password: '123456' }
    // login(this.state.zhang, this.state.mi).then(response => {
    //   console.log(response.message)
    //   const data = response.data
    //   const tokenStr = data.tokenHead + data.token
    //   // 把接口返回的token 存到cookie中，这样之后的所有接口 在访问时，才能在cookie 中拿到cookie 并通过
    //   //请求头的 Authorization 携带到后台。
    //   Cookie.setCookie('loginToken', tokenStr, 3)
    //   if (response.message === "操作成功") {
    //     window.location.href = ("/demo/a")
    //     let param = { pageSize: 100, pageNum: 1 };
    //     fetchList(param).then((res) => {
    //       console.log(res)
    //     })
    //   } else {
    //     alert("账号或者密码输入错误") 
    //   }
    // })
    if (this.state.ajaxDone) {
      if (this.state.userNameReg && this.state.padReg) {
        this.setState({
          ajaxDone: false
        })
        login(this.state.userName, this.state.psd).then(response => {
          console.log(response.data.data.token)
          if (response.data.code == 200) {
            window.location.href = ("/demo/a")
            const tokenStr = response.data.data.tokenHead + response.data.data.token
            Cookie.setCookie('loginToken', tokenStr, 3)
          } else {
            message.error(response.data.message)
          }
          this.setState({
            ajaxDone: true
          })
        })
      } else {
        message.error('用户名或密码输入有误')
      }
    }
  }
  userNameReg (e) {
    var val = e.target.value;
    if (!val) {
      this.setState({
        showUserNameInfo: { display: 'block' },
        info: '用户名不能为空'
      })
    } else {
      this.setState({
        showUserNameInfo: { display: 'none' },
        info: '',
        userName: e.target.value,
        userNameReg: true
      })
    }
  }
  userPsdReg (e) {
    var val = e.target.value;
    var reg = /^\d{6,}$/
    if (!reg.test(val)) {
      this.setState({
        showPsdInfo: { display: 'block' },
        padInfo: "密码不符合规则"
      })
    } else {
      this.setState({
        showPsdInfo: { display: 'none' },
        padInfo: '',
        psd: e.target.value,
        padReg: true
      })
    }
  }
  render () {
    return (
      <div>
        <div className="login"></div>
        <div className="inp">
          <div></div>
          <div>
            <Icon type="chrome" theme="filled" />
            <p>mall-admin-web</p>
          </div>
          <div className="deng">
            <Input
              onBlur={(e) => { this.userNameReg(e) }}
              placeholder="请输入用户名" /><br />
            <span style={this.state.showUserNameInfo}>{this.state.info} </span>
            <Input type="password" placeholder="请输入"
              onBlur={(e) => { this.userPsdReg(e) }} /><br />
            <span style={this.state.showPsdInfo}> {this.state.psdInfo}></span>

          </div>
          <Route>
            <div className="lu">
              {/* <Link to='/demo'> */}
              <Button type="primary" onClick={this.deng.bind(this)}>登陆</Button>
              {/* </Link> */}
            </div>
          </Route>
        </div>
      </div>

    )
  }
}