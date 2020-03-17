import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} type="text"/>
          <button onClick={() =>(this.props.addListItem(this.props.inputValue))}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((m, index) => (
              <li key={index+m}>{m}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// connect 就是做连接
// TodoList 和 store 做连接
// mapStateToProps 的参数就是 store 该方法会帮助我们把store映射到当前的Props

const mapDispatchToProps = (dispatch) => { // 把 store.dispatch 挂载到 props 上
  return {
    changeInputValue (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    addListItem (item) {
      // console.log('123')
      const action = {
        type: 'add_list_item',
        item: item
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);