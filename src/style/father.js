import React, { Component } from 'react'
export class father extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        {

          this.props.children
        }
      </div>
    )
  }
}

export default father
