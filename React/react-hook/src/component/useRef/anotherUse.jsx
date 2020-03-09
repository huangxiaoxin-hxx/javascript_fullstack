// useRef 保存普通变量

import React, { useRef, useState, useEffect } from 'react';

function Example () {
  // inputEl这个变量是useRef函数的返回值, 那么这个变量给谁当ref属性，就能表示该dom元素
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current.value = '猛哥贼帅'
    console.log(inputEl)
  }

  // =========
  const [text, setText] = useState('猛哥')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  })
  return (
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
    </>
  )
}

export default Example;