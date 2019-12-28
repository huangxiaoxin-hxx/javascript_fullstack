enum Direction {
  Up = 'UP',
  Down = 'Dowm',
  Left = 'Left',
  Right = 'Right'
}
console.log(Direction.Down)

// 异构枚举
enum yg {
  No = 0,
  Yes = 'Yes'
}

// 反向映射
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}
// var obj = {
//   name: 'wn'
// }
// obj['name']
console.log(Direction1[Direction1['Up']])

// 联合枚举