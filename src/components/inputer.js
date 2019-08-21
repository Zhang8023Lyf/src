import React, { Component } from 'react'
// import "./../css/inputer.css"
export class input extends Component {
  constructor() {
    super()
    this.state = {
      list: {
        txt: [
          "床前明月光",
          "疑是地上霜",
          "举头望明月",
          "张鑫在线求子4",
          "张鑫在线求子5",
          "张鑫在线求子6",
          "张鑫在线求子7",
        ]
      },
      hidden: { "display": "none" },
      ll: "",

    }

  }
  onKeydown (e) {
    if (e.keyCode == 40) {
      console.log(e)
      // this.state.list.txt

    }
  }

  Add () {
    this.setState({
      hidden: { "display": "block" }
    })
  }


  del (i) {
    this.setState({
      ll: this.state.list.txt.splice(i, 1)

    })


  }
  componentDidMount () {
    window.addEventListener("keydown", (e) => this.onKeydown(e))
  }

  render () {
    return (
      <div>
        <input type="text"
          onKeyDown={(e) => this.onKeydown(e)}
          onClick={this.Add.bind(this)}
          ref="texInput"
        />
        <ul style={this.state.hidden}>
          {this.state.list.txt.map((item, index) => {
            return (
              <li>
                {item}<span onClick={this.del.bind(this, index)}>删除</span>
              </li>
            )

          })}
        </ul>
      </div >
    )
  }
}

export default input
