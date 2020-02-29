import React, { Component } from 'react';
import { From, Input, Button, Card, Message } from 'antd'
import './index.less'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <div className="login">
        <Card className="login-from" style={{width: 300, borderRadius: 4}}>
          hello world
        </Card>
      </div>
    );
  }
}

export default Login;