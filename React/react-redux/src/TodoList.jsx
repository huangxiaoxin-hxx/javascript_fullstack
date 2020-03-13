import React, { Component } from 'react';
import store from './store'
import connect from 'react-redux'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} type="text"/>
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;