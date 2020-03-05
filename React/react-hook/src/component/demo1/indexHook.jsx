import React, { useState } from 'react';
// useState 就是一个hook
function Example () {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>你点了{count}次</p>
        <button onClick={() => {setCount(count+1)}}>点我</button>
    </div>
  )
}

export default Example;

// hooks 本质上就是一类特殊的函数  目的就是让你不再写 class，让 function 一统江湖