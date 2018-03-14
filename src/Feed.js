import React, { Component } from 'react';
import { /*Row, Col, Message, Button,*/ Carousel } from 'antd';

import Counter from './Counter';
import Notify from './Notify';

export default class Feed extends Component {

  componentDidMount() {

  }

  render(){
    return (
    <div className='feed-box'>
      <Carousel className='carousel' autoplay>
        <div><h3 className="DMS-2"></h3></div>
        <div><h3 className="DMS-1"></h3></div>
        <div><h3 className="DMS-2"></h3></div>
        <div><h3 className="DMS-1"></h3></div>
      </Carousel>
      <Notify />
    </div>
    );
  }
}
