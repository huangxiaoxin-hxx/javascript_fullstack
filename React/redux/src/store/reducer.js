import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_ITEM} from './actionTypes'
const defaultState = {
  inputValue: '',
  data: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
}
// 纯函数： 给定固定的输入，就一定会有固定的输出，不会有任何副作用
export default (state = defaultState, action) => {

  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.splice(action.index, 1)
    return newState
  }
  if(action.type === INIT_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data = action.data
    return newState
  }
  
  console.log(state, action)
  return state
}