import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import{ request } from "../../network/request"
import MoviceItem from './MoviceItem'
// import axios from 'axios'
class MM extends Component {
  constructor(props){
    super(props)
   
    
    this.state={
      movices: [],
      nowPage:parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total:0,
      isloading:true,
      moviceType:props.match.params.type
    }
  }

  componentDidMount() {
    
      this.loadMolist()
  }
 
 
  render() {
    return <div>
      {this.renderList()}
    </div>
  }
    

loadMolist=()=>{
  request({
    url:'/coming_soon',
    params: {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      start: this.state.pageSize * (this.state.nowPage - 1),
      count:this.state.pageSize, 
    }
    
  }).then(res=>{
    console.log('coming_soon');
    
    console.log(res);
   this.setState({
     isloading:false,
     movices:res.subjects,
     total: res.total
   })
  })
}


  renderList=() => {
    if(this.state.isloading) {
      return (
        <Spin tip="Loading..." size="large">
        <Alert
          message="数 据 加 载 中"
          description="精 彩 内 容,马 上 呈 现 "
          type="info"
        />
      </Spin>
      )
    }else{
      return <div style={{display:'flex',flexWrap:'wrap'}}>
      {this.state.movices.map(item => {
        return <MoviceItem {...item} key={item.id} ></MoviceItem>
      })}
    </div>
    }
  }

}

export default MM;