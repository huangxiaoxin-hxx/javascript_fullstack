import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentIuput'

class App extends React.Component {
  // 静态属性
  state = {
    commentList: []
  }
  onPulish = (userName, comment) => {
    console.log(userName, comment)
    // this.state.commentList = [{"userName": userName, "comment": comment},...this.state.commentList]
    // console.log(this.state.commentList)
    let c = {"userName": userName, "comment": comment}
    // 不可变数据
    let list = this.state.commentList.slice(0)
    list.push(c);
    this.setState({
      commentList: list
    })
  }
  handleDel = (event) => {
    // 删除的索引
    const i = parseInt(event.target.dataset.i)
    console.log(i)
    let list = this.state.commentList.slice(0)
    list.splice(i, 1)
    this.setState({
      commentList: list
    })
  }

  render() {
    return (
      <>
        <CommentInput onPulish={this.onPulish} />
        {/* 响应式编程 */}
        {/* <CommentList /> */}  
        {this.state.commentList.length}
        {this.state.commentList && this.state.commentList.map((item, i) => {
          return (
              <li key={i}>
                {item.userName}: {item.comment}
                <button data-i={i} onClick={this.handleDel}>删除</button>
              </li>
          )
        })}
      </>
    )
  }
}

export default App;
