import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList, initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'





// store 的创建

class TodoList extends Component {

  constructor (props) {
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    store.subscribe(this.handleStoreChange.bind(this)) // 只要 store 内的数据发生变化， subscribe就会执行
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
    // console.log(action)
    // const action = getTodoList()
    // store.dispatch(action)
  }
  


  handleInputChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  // 将新的store数据给到state
  handleStoreChange() {
    // console.log('store change')
    this.setState(store.getState())
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return(
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        data={this.state.data}
        handleItemDelete={this.handleItemDelete}
      />
    ) 
  }
}

export default TodoList;