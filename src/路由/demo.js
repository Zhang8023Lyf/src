import React from 'react';
import A from './A';
import B from './B';
import C from './C'
import { BrowserRouter, Route, Link } from 'react-router-dom'
export default class Index extends React.Component {
  constructor() {
    super()
  }
  submit () {
    window.location.href = '/a/4'
  }
  render () {
    return (
      <div>
        <BrowserRouter>

          <div>
            <ul>
              <li>
                {/* <Link to='/a/2'>A</Link> */}
                <button onClick={() => { this.submit() }}></button>
              </li>
              <li>
                <Link to='/b'>B</Link>
              </li>
              <li>
                <Link to='/c'>C</Link>
              </li>
            </ul>

            <Route path='/a/:id' component={A} ></Route>
            <Route path='/b' component={B} ></Route>
            <Route path='/c' component={C} ></Route>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}