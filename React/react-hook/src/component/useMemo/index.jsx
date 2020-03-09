// useMemo (useCallback) 优化React Hooks 程序的性能

import React, { useState, useMemo } from 'react';

function Example () {
  const [wn, setWn] = useState('蜗牛coding')
  const [zm, setZm] = useState('猛哥')

  return (
    <>
      <button onClick={() => {setWn(new Date().getTime())}}>蜗牛</button>
      <button onClick={() => {setZm(new Date().getTime()+'猛哥')}}>猛哥</button>
      <ChildComponent name={zm}>{wn}</ChildComponent>
    </>
  )
}

function ChildComponent ({name, children}) {
  function changZm (name) {
    console.log('他来了，猛哥向我们走来了')
    return name + ',向我们走来了'
  }

  const actionZm = useMemo(() => changZm(name), [name])
  return (
    <>
      <div>{actionZm}</div>
      <div>
        {children}
      </div>
    </>
    
  )
}

export default Example;