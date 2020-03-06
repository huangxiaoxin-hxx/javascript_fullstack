import React, { useState } from 'react';
// useState 就是一个hook
function Example () {
  const [ count, setCount ] = useState(0)
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  return (
    <div>
      <p>你点了{count}次</p>
        <button onClick={() => {setCount(count+1)}}>点我</button>
    </div>
  )
}

// useState多状态
function Example2 () {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')

  // react 是如何保证useState找到自己对应的state
  // react 是根据useState出现的顺序来确定的 react hooks 不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序

  return (
    <div>
      <p>蜗牛:性别 {sex}, {age}岁, 工作是{work}</p>
    </div>
  )
}

export default Example2;

// hooks 本质上就是一类特殊的函数  目的就是让你不再写 class，让 function 一统江湖