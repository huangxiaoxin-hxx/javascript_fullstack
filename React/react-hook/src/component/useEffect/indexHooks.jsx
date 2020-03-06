import React, { useState, useEffect } from 'react';
// useState 就是一个hook
function Example () {
  const [ count, setCount ] = useState(0)
 
  useEffect(() => {
    console.log(`componentDidMount => 你点击了 ${count} 次`)
  })
  return (
    <div>
      <p>你点了{count}次</p>
        <button onClick={() => {setCount(count+1)}}>点我</button>
    </div>
  )
}

export default Example;

//1. React首次渲染和之后的每一次渲染都会调用useEffect
//2. useEffect里面定义的函数是异步执行的，他不会阻碍浏览器更新视图