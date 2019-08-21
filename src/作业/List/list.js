import React, { Component } from 'react'
import "./list.css"
import {
  Link
} from "react-router-dom"
export class list extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    console.log(this.props)
    // this.setState({
    //   list: this.props.list
    // })
  }
  render () {
    return (
      <div>

        {
          this.props.data.map((i, index) => {
            return (
              <li key={index}>
                {i.name}
                <img src={"https://fuss10.elemecdn.com" + i.image_url} alt="" />
              </li>

            )
          })
        }

      </div>
    )
  }
}

export default list
