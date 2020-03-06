// 副作用 hooks模式下状态 (state) 发生变更的时候提供我们做额外操作的地方
import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log(`componentDidMount => 你点击了 ${this.state.count} 次`)
  }

  componentDidUpdate() {
    console.log(`componentDidMount => 你点击了 ${this.state.count} 次`)
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate() {
    console.log(`componentDidMount => 你点击了 ${this.state.count} 次`)
  }

  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>你点了{this.state.count}次</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
      </div>
    );
  }
}

export default Example;