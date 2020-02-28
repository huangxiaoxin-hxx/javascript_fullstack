import React, { Component, Fragment } from 'react'
import './Xiaojiejie.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list:['头部按摩','精油推背']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="addInput">增加服务:</label>
          <input id="addInput" className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => (
              <Fragment key={index+item}>
                {/* <li
                  dangerouslySetInnerHTML={{__html: item}} // 可以解析 html 如 在输入框中 <h2>某某某</h2> 字体会变大
                >
                </li> */}
                <XiaojiejieItem></XiaojiejieItem>
                <button onClick={this.deleteItem.bind(this,index)}>删除</button>
              </Fragment>
            ))
          }
        </ul>
      </Fragment> 
    )
  }

  inputChange(e) {
    console.log(this)
    this.setState({
      inputValue: e.target.value
    })
  }

  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 删除列表项
  deleteItem(index) {
    console.log(index)
    let list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie