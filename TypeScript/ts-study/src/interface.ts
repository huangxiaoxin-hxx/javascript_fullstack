// 接口
const getUsername = (user: User) => {
  user.name
  user.say = function (wrods: string) {
    return 'hello'
  }
}


interface User {
  name: string,
  age?: number,
  readonly isMale: boolean,
  // say: (words: string) => string
  say: Say
}

interface Say {
  (words: string): string
}

interface Config {
  width?: number,
  // [proName: string]: any
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if(config.width) {
    square = config.width * config.width
  }
  return {area: square}
}
let mySquare = CalculateAreas({width: 5})
console.log(mySquare)

// 类型断言
// let mySquare1 = CalculateAreas({widdth: 5} as Config)
// 添加字符串索引签名
// let mySquare2 = CalculateAreas({widdth: 5})

// 继承接口
interface VIPUser extends User{
  broadcas: () => void
}

interface SupperUser extends VIPUser{
  getGrade: () => void
}