// ts原始数据类型

const isLoading: boolean = false
const decLiteral: number = 6
const book: string = '深入浅出 TypeScript'
// void 空类型
function test(): void {
  console.log('淦')
}

const a: void = undefined
const b = null

let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2 // true

// 大数整型
// const max = BigInt(Number.MAX_SAFE_INTEGER)

// const max1 = max + 1n
// const max2 = max + 1n
// max1 === max2