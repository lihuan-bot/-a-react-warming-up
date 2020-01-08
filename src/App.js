import React, { Component } from 'react'

import { HashRouter, Route, Link } from 'react-router-dom'

import { Layout, Menu} from 'antd';

import './css/app.less'
import Home from './components/home/Home'
import About from './components/about/About'
import Movice from './components/movice/Movice'


const { Header, Content ,Footer} = Layout;



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    
    
  }

  render() {
    return <HashRouter>
  <Layout style={{height:"100%"}}>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item> */}
        <Menu.Item key="movice"><Link to="movice/in_theaters/1">电影</Link></Menu.Item>
        {/* <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{backgroundColor:'#fff', flex :1 }}>
      <Route path="/home" component={Home} ></Route>
      <Route path="/about" component={About} ></Route>
      <Route path="/movice" component={Movice} ></Route>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    </HashRouter>
  }
}