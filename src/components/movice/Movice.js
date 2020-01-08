import React from 'react'
import {Link, Route} from 'react-router-dom'
import MoviceList from './MoviceList'
import M from './M'
import MM from './MM'
 
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;

export default class Movice extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  
  render() {
    return  <Layout style={{height:"100%"}}>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1"><Link to="/movice/in_theaters" replace>正在热映</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/movice/coming_soon" replace>即将上映</Link></Menu.Item>
        <Menu.Item key="3" ><Link to="/movice/top250" replace>Top250</Link></Menu.Item>
          
      </Menu>
    </Sider>
    <Layout style={{ paddingLeft: '1px' }}>
      <Content
        style={{
          background: '#fff',
          padding: 10,
          margin: 0,
          minHeight: 280,
        }}
      >
       <Route path="/movice/in_theaters" component={MoviceList}></Route>
       <Route path="/movice/top250" component={M}></Route>
       <Route path="/movice/coming_soon" component={MM}></Route>
      </Content>
    </Layout>
  </Layout>
  }
}