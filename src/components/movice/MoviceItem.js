import React, { Component } from 'react';
import '../../css/movice_item.less'

class MoviceItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="box">
        <img src={this.props.images.small} alt="" className="img"/>
        <h4>电影名称：{this.props.title}</h4>
        <h4>上映年份：{this.props.year}年</h4>
        <h4>电影类型：{this.props.genres.join('，')}</h4>
      </div>
    );
  }
}

export default MoviceItem;