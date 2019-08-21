import React, { Component } from 'react';
import { Button, Input } from "antd"
import {
  HashRouter, Route, BrowserRouter,
  Link, NavLink, Switch
} from "react-router-dom"

// import Demo from "./react项目/demo"
import Login from "./react项目/登录/后台管理系统/Login"
// import Index from "./考试/index"
// import ShopCar from "./考试练习/demo"
import Home from "./redux购物车/Home"





class App extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  render () {
    return (
      <div className="app">
        {/* <BrowserRouter>
          <Route path='/demo' component={Demo} ></Route>
          <Route path='/' component={Login} exact></Route>
        </BrowserRouter> */}
        {/* <Prom></Prom> */}
        {/* <Index></Index> */}
        {/* <ShopCar></ShopCar> */}
        <Home></Home>
      </div>
    );
  }
}

export default App;
