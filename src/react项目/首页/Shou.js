import React from 'react'
import { fetchList } from "../登录/后台管理系统/api/produt"
import * as Cookie from '../登录/后台管理系统/utils/cookie'
export default class Shou extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    //   this.state = {
    //     navObj: {
    //       "/home/product": [`首页`, `数据列表`],
    //       "/home/product": [`首页`, `订单列表`],
    //     },
    //     navList: ["首页"]
    //   }
    // }
    // componentWillMount () {
    //   var token = Cookie.getCookie("loginToken")
    //   console.log(token);
    //   if (!token) {
    //     alert("还没有登录!")
    //   }
    //   if (this.props.histort.location.pathname.length > 0) {
    //     this.setState({
    //       navList: this.state.navObj[this.props.history.location.pathname]
    //     })
    //     this.props.history.listen((route) => {
    //       console.log(this.props.history)
    //       this.setState({
    //         navList: this.state.navObj[this.props.histort.location.pathname]
    //       })
    //     })
    //   }
    // componentWillUpdate(nextProps, nexState){


  }
  render () {
    return (
      <div>
        <div className='Qw'>
          <div className='Qe'>
            <div className='Qr'>后台项目</div>
            <div>mall</div>
          </div>
          <div className='Qe'>
            <div className='Qr'>前端项目</div>
            <div>mall-admin-web</div>
          </div>
          <div className='Qe'>
            <div className='Qr'>前端项目</div>
            <div>mall-admin-web</div>
          </div>
        </div>
        <div className='Qw'>
          <div className='Qe Q'>
            <div className='img'>
              <img src="../1011.jpg" alt="" />
            </div>
            <div className='Qt'>
              <div className=''>今日订单总数</div>
              <div>￥200</div>
            </div>
          </div>
          <div className='Qe Q'>
            <div className='img'>
              <img src="../1011.jpg" alt="" />
            </div>
            <div className='Qt'>
              <div className=''>今日销售总额</div>
              <div>￥5000.00</div>
            </div>
          </div>
          <div className='Qe Q'>
            <div className='img'>
              <img src="../1011.jpg" alt="" />
            </div>
            <div className='Qt'>
              <div className=''>昨日销售总额</div>
              <div>￥5000.00</div>
            </div>
          </div>
        </div>
        <div className='Qg'>
          <div className='Qa'>待处理事项</div>
          <div className='Qw'>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>

            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
          </div>
          <div className='Qw'>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
          </div>

          <div className='Qw'>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
            <div className='Qy'>
              <div className='Qu'>
                <div className='Qi'>待处理事项</div>
                <div className='Qi Qii'>(10)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Qw Qf">
          <div className='Qp'>
            <div className='Qa'>商品预览</div>
            <div className='Qs'>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>

            </div>
          </div>
          <div className='Qp'>
            <div className='Qa'>商品预览</div>
            <div className='Qs'>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
              <div className='Qd'>
                <div>100</div>
                <div>已下架</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

