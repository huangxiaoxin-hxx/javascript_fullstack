import React, {useState} from 'react';  // Vue
import logo from './logo.svg';
import './App.css';
// 画皮 界面开发 组件
// vue 三明治
// react js + template
// .css 放在别的地方 .js + .css
function App () {  // 函数式组件
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ])
  return (
    <div className="app">
      {/* hello, react */}
      <div className="header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <form className="todo-list">
        <ul>
          {
            // js 运行区域
            // v-for
            todos.map((todo, i) => (
              <li key={i}>{todo.content}</li>
            ))
          }
        </ul>
      </form>
    </div>
  )
}

export default App;
