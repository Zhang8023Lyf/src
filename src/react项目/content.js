import React, { Component } from 'react'
import ShopList from "./商品/ShopList"
import AddShop from "./商品/AddShop"
import LeiShop from "./商品/LeiShop"
import Shou from "./首页/Shou"
import { Route } from 'react-router-dom'
export class content extends Component {
  render () {
    return (
      <div className="content">

        <div>
          <Route path='/demo/a' component={ShopList}  ></Route>
          <Route path='/demo/b' component={AddShop} ></Route>
          <Route path='/demo/c' component={LeiShop} ></Route>
          <Route path='/demo/d' component={Shou} ></Route>
        </div>





      </div>
    )
  }
}

export default content
