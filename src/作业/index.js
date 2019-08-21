import React, { Component } from 'react'
import A from "./A"
import B from "./B"
import C from "./C"
import D from "./D"
import Sea from "./search"
import Footer from "./Footer"
import My from "./MY/my"
import Dd from "./MY/DD"
import "./index.css"
import "./rem"
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

export class index extends Component {
  render () {
    return (
      <div className="box">
        <BrowserRouter>

          <div>
            <Route path='/' exact component={A} ></Route>
            <Route path='/b' component={B} ></Route>
            <Route path='/c' component={C} ></Route>
            <Route path='/d' component={D} ></Route>
            <Route path='/my' component={My} ></Route>
            <Route path='/dd' component={Dd} ></Route>

          </div>
          <Switch>
            <Route path='/seach' component={Sea} ></Route>
            <Footer></Footer>
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}

export default index
