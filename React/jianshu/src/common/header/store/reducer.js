import * as types from './actionTypes'
import { fromJS } from 'immutable'
// immutable.js 生成 immutable对象，是个不可改变对象

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if(action.type === types.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if(action.type === types.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}