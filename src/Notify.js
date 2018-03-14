import React, {Component} from 'react';
import { Button, notification } from 'antd';

export default class Notify extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is a test, signup Today!',
      description: '.........................'
    }
  }

  openNotification() {
    notification.open({
      message: this.state.message,
      description: this.state.description
    })
  }

  render(){
    return (
      <Button
        type="primary"
        onClick={ this.openNotification.bind(this) }>Notification</Button>
    );
  }
}
