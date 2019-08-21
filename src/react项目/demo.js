import React, { Component } from 'react'
import Hea from "./header"
import Ind from "./index"
import Cont from "./content"
import "./demo.css"
import { Layout } from 'antd';
import { white } from 'ansi-colors';
import { BrowserRouter, Route, Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
class componentName extends Component {
  render () {
    return (
      <div className="box">

        <div>
          <Layout>
            <Sider style={{ minHeight: 999 }}>
              <Ind></Ind>
            </Sider>
            <Layout>
              <Header style={{ background: "white" }}>
                <Hea></Hea>
              </Header>
              <Content>
                <Cont>

                </Cont>
              </Content>
            </Layout>
          </Layout>
        </div>

      </div >
    )
  }
}


export default componentName
