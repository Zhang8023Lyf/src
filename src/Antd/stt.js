import React, { Component } from 'react'
import { Button, Input, Carousel, Calendar, Table } from 'antd';
import Axios from "axios"
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'distance',
  },
  {
    title: '标题',
    dataIndex: 'address',
  },
];


export class stt extends Component {
  constructor() {
    super()
    this.state = {
      list: []


    }
  }
  componentDidMount () {
    Axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
      .then((res) => {
        // debugger;// 断点
        this.setState({
          list: res.data
        })
        console.log(this.state.list)
      })
  }


  render () {
    return (
      <div>
        <h4>Middle size table</h4>
        <Table columns={columns} dataSource={this.state.list} pagination={{ pageSize: 5 }} size="middle" />
      </div>
    )
  }
}


export default stt