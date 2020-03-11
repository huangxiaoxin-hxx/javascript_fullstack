import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_ITEM, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_TODO_ITEM,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
//       // console.log(res)
//       const data = res.data
//       const action = initListAction(Object.keys(data.hotComments[0]))
//       // console.log(action)
//       // store.dispatch(action)
//       dispatch(action)
//     })
//   }
// }