import React from 'react';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge, Table, Tag } from 'antd'
import { UserOutlined, SmileOutlined } from '@ant-design/icons'
import { Route, Link } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout
const DropMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">修改密码</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">退出登录</a>
    </Menu.Item>
  </Menu>
)

function Table1() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.name}</a>
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div>
      <h3>Table</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
class PageLayout extends React.Component {
  render () {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的..." />
            </Col>
            <Col span={6}>
              <Avatar style={{ backgroundColor: '#666', marginRight: 20 }} icon={<UserOutlined/>} ></Avatar>
              <Dropdown overlay={DropMenu}>
                <a style={{ color: '#fff' }}>Hi,黄小心</a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{position: 'relative'}}>
          <Sider>
            <Menu defaultOpenKeys={['sub1']} mode="inline" style={{width: 256, height: '90vh', overflow: 'auto', minWidth: 256}}>
              <Menu.SubMenu key="sub1" title={<span><SmileOutlined/>部分UI组件实践1</span>}>
                <Menu.Item key="sub1-1">
                  <Link to={{pathname: '/table', search: '?id=1'}} >表格展示</Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  <Link to="/" >标签页面</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2" title={<span><SmileOutlined/>部分UI组件实践2</span>}>
                <Menu.Item key="sub2-1">表格展示</Menu.Item>
                <Menu.Item key="sub2-2">标签页面</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Content style={{marginLeft: '5%'}} >
            <Route path="/table" component={Table1} />
          </Content>

          <Footer style={{boxSizing: 'border-box', position: 'absolute', bottom: 0, left: 256, textAlign: 'center',right: 0}}>
            footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default PageLayout