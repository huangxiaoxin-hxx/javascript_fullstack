import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ marginLeft: 10, marginTop: 10 }}>
      <div>
        <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="todo info" style={{ width: 400, marginRight: 10 }} />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ marginTop: 10, width: 400 }}
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item>
            {item}<Button onClick={props.handleItemDelete.bind(this, index)}>删除</Button>
          </List.Item>
        )}
      />
    </div>
  )
}


// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginLeft: 10, marginTop: 10 }}>
//         <div>
//           <Input onChange={this.props.handleInputChange} value={this.props.inputValue} placeholder="todo info" style={{ width: 400, marginRight: 10 }} />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: 10, width: 400 }}
//           bordered
//           dataSource={this.props.data}
//           renderItem={(item, index) => (
//             <List.Item key={index}>
//               {item}<Button onClick={(index) => { this.props.handleItemDelete(index) }}>删除</Button>
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;