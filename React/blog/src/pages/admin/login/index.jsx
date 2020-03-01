import React, { Component } from 'react';
import { Form, Input, Button, Card, Message } from 'antd'
import './index.less'
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import { MenuItem } from 'rc-menu';
import Particles from 'react-particles-js';

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: ''
    }
  }


  handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(this.state.username, this.state.password)
    console.log('登录成功')
    sessionStorage.setItem('blogUser', '黄小心')
    sessionStorage.setItem('menuItemKey', '0')
    this.props.history.push('/admin/page')
  }

  render() {
    return (
      <div className="login">
        <Particles/>
        <Card className="login-form" style={{width: 300, borderRadius: 4}}>
          <Form onFinish={this.handleSubmit}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input prefix={<UserOutlined style={{color: 'rgba(0, 0, 0, 0.25)'}} />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input prefix={<LockOutlined style={{color: 'rgba(0, 0, 0, 0.25)'}} />} placeholder="请输入密码" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="login-form-button" block >login</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;