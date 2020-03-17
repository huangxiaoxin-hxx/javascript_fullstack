const defaultState = {
  inputValue: 'hxx 牛逼',
  list: ["dev", "mark"]
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_list_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.item)
    newState.inputValue = ''
    return newState
  }
  return state
}