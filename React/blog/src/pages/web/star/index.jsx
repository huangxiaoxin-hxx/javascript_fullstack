import React, { Component } from 'react';
import { List } from 'antd';
import './index.less'
import { Link } from 'react-router-dom'

class Star extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          "createdAt": "2019-04-10 10:19",
          "updatedAt": "2019-04-10 10:19",
          "id": 3,
          "title": "React 16 加载性能优化指南",
          "url": "https://juejin.im/post/5b506ae0e51d45191a0d4ec9"
        },
        {
          "createdAt": "2019-03-30 14:02",
          "updatedAt": "2019-03-30 14:02",
          "id": 2,
          "title": "CentOS7 系统目录详解和常用命令[文件和目录]",
          "url": "https://blog.csdn.net/qq_22860341/article/details/81363655"
        }
      ],
      pageNo: 1,
      pageSize: 5,
    }
  }

  render() {
    return (
      <div className="star-wrapper">
        <List
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: this.state.pageSize,
          }}
          header={<div className="star-title">文章收藏</div>}
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item key={item.id}>
              <Link>
                <span>{item.title}</span>
              </Link>
            </List.Item>
          )}
        >
        </List>
      </div>
    );
  }
}

export default Star;