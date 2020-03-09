// useContext 让父子组件传值变得更加简单
import React, { useState, useContext, createContext } from 'react';

const countContext = createContext()

function Example () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count+1)}}>点我</button>
      <countContext.Provider value={count}>
        <Counter />
      </countContext.Provider>
    </div>
  )
}

function Counter () {
  const count = useContext(countContext)
  return (
    <h2>{count}</h2>
  )
}

export default Example;