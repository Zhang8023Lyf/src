import React from 'react'
import "../css/paixu.css"
import { func } from 'prop-types';
export default class paixu extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          img: "./a.png",
          title: "宝马经典全顺2015款2.4L汽油短轴1",
          li: "2.75万公里",
          nian: 2012,
          jia: "商家",
          shou: "首付",
          fu: 2.28,
          id: 1,
          quan: "全款7.98万"
        },
        {
          img: "./a.png",
          title: "夏利经典全顺2015款2.4L汽油短轴2",
          li: "2.75万公里",
          nian: 2011,
          jia: "商家",
          shou: "首付",
          fu: 3.28,
          id: 2,
          quan: "全款7.98万"
        },
        {
          img: "./a.png",
          title: "现代经典全顺2015款2.4L汽油短轴3",
          li: "2.75万公里",
          nian: 2015,
          jia: "商家",
          shou: "首付",
          fu: 7.28,
          id: 3,
          quan: "全款7.98万"
        },
        {
          img: "./a.png",
          title: "本田经典全顺2015款2.4L汽油短轴4",
          li: "2.75万公里",
          nian: 2013,
          jia: "商家",
          shou: "首付",
          fu: 1.28,
          id: 4,
          quan: "全款7.98万"
        },
        {
          img: "./a.png",
          title: "奔驰经典全顺2015款2.4L汽油短轴5",
          li: "2.75万公里",
          nian: 2018,
          jia: "商家",
          shou: "首付",
          fu: 9.28,
          id: 5,
          quan: "全款7.98万"
        },
      ],
      lis: "",
      list2: []
    }
  }
  componentDidMount () {
    this.setState({
      list2: this.state.list.slice(0)
    })
  }
  render () {
    return (
      <div>
        <div className="pai">
          <button onClick={this.mo.bind(this)}>默认排序</button>
          <button>品牌</button>
          <button onClick={this.dia.bind(this)}>价格排序</button>
          <button>级别</button>
          <button>筛选</button>
        </div>
        <input type="text" onChange={this.sou.bind(this)} />
        <div className="xu">
          <ul>
            {this.state.list2.map((item, i) => {
              return (
                <li key={i} className="li">
                  <div className="din">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="dian">
                    <h4>
                      {item.title}
                    </h4>
                    <div className="span">
                      <span className="a">{item.li}</span>/
                                            <span className="a">{item.nian}</span>/
                                            <span className="a">{item.jia}</span>
                    </div>
                    <div className="spa">
                      <span className="a b"> {item.shou}</span>
                      <span className="b">{item.fu}万</span>
                      <span className="a"> {item.quan} </span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
  // 排序
  dia () {
    this.state.list2.sort((a, b) => {       //sort() 方法用于对数组的元素进行排序,并返回数组。
      return a.fu - b.fu
    })
    this.setState({
      lis: this.state.list
    })
  }
  mo () {
    this.state.list2.sort((a, b) => {       //sort() 方法用于对数组的元素进行排序,并返回数组。
      return a.id - b.id
    })
    this.setState({
      lis: this.state.list2
    })
  }
  sou (e) {
    var val = e.target.value;
    var arr = this.state.list.filter(function (item) {
      return item.title.indexOf(val) != -1
    })
    if (arr.length > 0) {
      this.setState({
        list2: arr
      })
    }

    console.log(arr)
  }
}