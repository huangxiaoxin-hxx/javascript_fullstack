import React, { Component } from 'react';

const WithMouse = (Com) => {
  return class extends Component {
    state = { x: 0, y: 0 }

    handleMouseMove = (e) => {
      console.log(e)
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    render () {
      return (
        <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
          <Com {...this.props} mouse={this.state} />
        </div>
      )
    }
  }
}

// 定义一个纯函数无状态组件

const App = (props) => {
  const { x, y } = props.mouse
  return (
    <div style={{height: '100vh'}}>
      <h1>The mouse position is ({x}, {y})</h1>
    </div>
  )
}

const AppWithMouse = WithMouse(App)

export default AppWithMouse;