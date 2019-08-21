import React, { Component } from 'react'
import Swiper from "swiper"
import Axios from "axios"
// import List from "./List/list"
import {
  Link
} from "react-router-dom"
export class A extends Component {
  constructor() {
    super()
    this.state = {
      List: [],
      list2: []
    }
  }
  componentDidMount () {

    Axios.get('http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F')
      .then((res) => {
        if (res.data.length > 0) {
          var arr = this.mySort(res.data)
          this.setState({
            List: arr
          })
          console.log(this.state.List)
          new Swiper('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
              disableOnInteraction: false,
            },
            pagination: {  //分页器
              el: '.swiper-pagination'
            }
          })
        }
      })
    Axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset=0&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
      .then((res) => {
        // debugger;// 断点
        this.setState({
          list2: res.data
        })
        console.log(this.state.list2)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  mySort (arr) {
    var arrList = [];
    for (var i = 0, j = 0; i < arr.length; i += 8, j++) {
      arrList[j] = arr.slice(i, i + 8)
    }
    return (arrList)
  }
  render () {
    return (
      <div className="ll">
        <header>
          <img src="../e.png" /><span>昌平马池口</span>
          <p>
            <input type="text" placeholder="搜素商家丶商品名称" />
          </p>
        </header>
        <div className="con">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <div class="swiper-slide">轮播图一</div>
              <div class="swiper-slide">轮播图二</div>
              <div class="swiper-slide">轮播图三</div> */}

              {
                this.state.List.map((i, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      {
                        i.map((item, index) => {
                          return (
                            <div className="Link_to_food" key={index}>

                              <img src={"https://fuss10.elemecdn.com" + item.image_url} alt="" />
                              <p>{item.title}</p>

                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* <List data={this.state.list2}></List> */}
          {this.state.list2.map((i, index) => {
            return (
              <div key={index} className="gao">
                <Link to={`./xiang/${i.id}`} className="fen">
                  <div className='imgt'>
                    <img src={"https://elm.cangdu.org/img/" + i.image_path} alt="" />
                  </div>
                  <div className='tit'>
                    <span className='pin'>品牌</span>
                    {i.name}
                    <div className='xing'>
                      ★★★★★
                                        <span className="se">{i.rating}</span>
                      <span className="se"> 月售{i.recent_order_num}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default A
