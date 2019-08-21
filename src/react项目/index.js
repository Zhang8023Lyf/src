import React, { Component } from 'react'
import { Menu, Icon, Button, Layout, Breadcrumb } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom'
import * as Cookie from './登录/后台管理系统/utils/cookie'
const { SubMenu } = Menu;

export class index extends Component {
  constructor() {
    super()
    this.state = {
      sty: { color: "white" },
      navObj: {
        './demo/a': ['首页', '数据列表'],
        './demo/b': ['首页', '订单列表']
      },
      navList: ['首页']
    }
  }
  componentWillMount () {
    var token = Cookie.getCookie("loginToken")

    if (!token) {
      alert("还没有登录!")
    }

  }
  selectNav (e) {
    console.log(e)
  }
  render () {
    return (
      <div className="left">
        <div style={{ width: 200 }}>
          <Layout style={{ padding: '0 24px 24px ' }} className="shou">
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                this.state.navList && this.state.navList.map((item, index) => {
                  return (
                    <Breadcrumb.Item key={index}>{item}></Breadcrumb.Item>
                  )
                })
              }
            </Breadcrumb>
          </Layout>
          <Menu
            onClick={(e) => { this.selectNav(e) }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span style={this.state.sty}><Link to='/demo/d'>首页</Link></span>
            </Menu.Item>


            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>商品</span>
                </span>
              }
            >
              <Menu.Item key="5">
                <Link to='/demo/a'>商品列表</Link>

              </Menu.Item>
              <Menu.Item key="6"><Link to='/demo/b'>添加商品</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/demo/c'>商品分类</Link></Menu.Item>
              <Menu.Item key="8">商品类型</Menu.Item>
              <Menu.Item key="9">品牌管理</Menu.Item>


            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>订单</span>
                </span>
              }
            >
              <Menu.Item key="13">订单列表</Menu.Item>
              <Menu.Item key="10">订单设置</Menu.Item>
              {/* <SubMenu key="sub3" title="Submenu"> */}
              <Menu.Item key="11">退货申请处理</Menu.Item>
              <Menu.Item key="12">退货原因设置</Menu.Item>
              {/* </SubMenu> */}
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="mail" />
                  <span>营销</span>
                </span>
              }
            >
              <Menu.Item key="17">秒杀活动列表</Menu.Item>
              <Menu.Item key="14">优惠券列表</Menu.Item>
              <Menu.Item key="15">品牌推荐</Menu.Item>
              <Menu.Item key="16">新品推荐</Menu.Item>
              <Menu.Item key="18">人气推荐</Menu.Item>
              <Menu.Item key="19">专题推荐</Menu.Item>
              <Menu.Item key="20">广告列表</Menu.Item>


            </SubMenu>
          </Menu>

        </div>
      </div>
    )
  }
}

export default index
