import React, { Component } from 'react'
import { fetchList } from '../登录/后台管理系统/api/produt'
import { Input, Icon, Switch, Button, Table, Cascader } from 'antd';
import Axios from 'axios';
const options = [
  {
    value: '服装',
    label: '服装',
    children: [
      {
        value: '外套',
        label: 'T衫',
      },
    ],
  },
  {
    value: '手机数码',
    label: '手机数码',
    children: [
      {
        value: '手机通讯',
        label: '手机配件',
      },
    ],
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '商品图片',
    dataIndex: 'pic',
    key: 'image',
    render: (pic) => {
      return <img src={pic} alt="" style={{ width: '5    0px', height: '50px' }} />
    }
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
    "children": [
      {
        "dataIndex": "name"
      }
    ],

  },
  {
    title: '价格/货号',
    dataIndex: 'price',
    key: 'price'

  },
  {
    title: '标签',
    dataIndex: 'address',
    key: 'id',
    render: (text, list) => <div>
      <div>上架：<Switch defaultChecked onChange={onChange} /></div>
      <div>新品：<Switch defaultChecked onChange={onChange} /></div>
      <div>推荐：<Switch defaultChecked onChange={onChange} /></div>
    </div>

  },
  {
    title: '排序',
    dataIndex: 'sort',
    key: 'sort'

  }, {
    title: 'SKU库存',
    dataIndex: 'albumPics',
    key: 'image',
    render: (albumPics) => {
      return <img src={albumPics} alt="" style={{ width: '5    0px', height: '50px' }} />
    }

  },
  {
    title: '销量',
    dataIndex: 'sale',
    key: 'id'

  },
];
function onChange (checked) {
  console.log(`switch to ${checked}`);
}
export class ShopList extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    let param = { pageSize: 100, pageNum: 1 };
    fetchList(param).then((res) => {
      this.setState({
        list: res.data.data.list
      })
      console.log(res.data.data)
    })


  }

  render () {
    return (
      <div>
        <div className="shoplist">
          <div className="top">
            <span>
              <Icon type="search" />筛选搜索
          </span>
            <span>
              <Button>重置</Button>
              <Button type="primary">查询结果</Button>
            </span>
          </div>
          <div className="top1">
            <p>
              <span>输入搜索:<Input placeholder="商品名称" /> </span>
              <span>商品货号:<Input placeholder="商品货号" /> </span>
            </p>
            <p>
              <span>商品分类:<Cascader options={options} placeholder="请选择" /> </span>
              <span>商品品牌:<Cascader options={options} placeholder="请选择" /> </span>
            </p>
            <p>
              <span>上架状态:<Cascader options={options} placeholder="请选择" /> </span>
              <span>审核状态:<Cascader options={options} placeholder="请选择" /> </span>
            </p>
          </div>
        </div>
        <div className="spc">
          <span>
            <Icon type="unordered-list" />数据列表
          </span>
          <span>
            <Button>添加</Button>
          </span>
        </div>
        <div className="tab">
          <Table

            columns={columns} dataSource={this.state.list} />
        </div>
      </div>
    )
  }
}

export default ShopList
