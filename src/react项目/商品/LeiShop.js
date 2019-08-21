import React from 'react'
import { Button, Table, Divider, Switch } from 'antd'


import { produx } from '../登录/后台管理系统/api/produt'
const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '级别',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <div>
      一级
      </div>
  },
  {
    title: '商品数量',
    dataIndex: 'productCount',
    key: 'address',
  },
  {
    title: '数量单位',
    key: 'productUnit',
    dataIndex: 'productUnit',
  },
  {
    title: '导航栏',
    key: 'tti',
    render: (text) => (
      <span>
        <Switch defaultChecked onChange={onChange} />
      </span>
    ),
  },
  {
    title: '是否显示',
    key: 'dd',
    render: (text) => (
      <span>
        <Switch defaultChecked onChange={onChange} />
      </span>
    ),
  },
  {
    title: "排序",
    key: "action",
    dataIndex: 'sort'
  },
  {
    title: '设置',
    key: 'cha',
    dataIndex: 'cha',
    render: (text) => <div>
      <Button>查看下级</Button>
      <Button>转移商品</Button>
    </div>
  },
  {
    title: "操作",
    key: 'cao',
    dataINdex: "cao",
    render: (text) => <div>
      <Button>编辑</Button>
      <Button type="danger">删除</Button>
    </div>
  }
];
function onChange (checked) {
  console.log(`switch to ${checked}`);
}
export default class LeiShop extends React.Component {
  constructor() {
    super()
    this.state = {


    }
  }
  componentDidMount () {
    let param = { pageSize: 5, pageNum: 1 };
    produx(param).then((res) => {
      console.log(res.data.data.list)
      this.setState({
        list: res.data.data.list
      })
    })
  }
  render () {
    return (
      <div>
        <div className='Fq'>
          <span>数据列表</span>
          <span>
            <Button>添加</Button>
          </span>
        </div>
        <Table key columns={columns} dataSource={this.state.list} />
      </div>
    )
  }
}