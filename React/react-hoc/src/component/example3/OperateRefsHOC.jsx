import React, { Component } from 'react';

function HOC(WrapperdComponent) {
  let inputElement = null

  function handleClick() {
    // console.log(inputElement)
    inputElement.focus()
  }

  return (props) => (
    <div>
      <WrapperdComponent inputRef={(el) => { inputElement = el }} {...props} />
      <input type="button" value="获取子组件输入框的焦点" onClick={handleClick}/>
    </div>
  )
}

export default HOC