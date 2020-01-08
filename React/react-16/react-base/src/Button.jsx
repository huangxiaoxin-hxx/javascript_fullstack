import React from 'react';

function Button(props) {
  let date = new Date().getTime();
  // 通知父组件
  const handleClick = () => {
    console.log(123456);
  }
  const {type, children, receiveFrombutton} = props;
  // 父组件传递 回调 过来， 子组件通过参数 通知父组件
  receiveFrombutton(date);
  return (
    <button onClick={handleClick}
    className={type === 'primary' && 'primary-class'}
    >{ children }</button>
  )
}

export default Button