// const add = (a: number, b: number): number => a + (b ? b : 0)

// const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a) 

// 函数的重载

// function assigned(all: number): Direction
// function assigned(topAndBottom: number, leftAndRight: number): Direction

// function assigned(a: number, b?: number, c?: number, d?: any) {
//   if ( b === undefined && c === undefined && d === undefined) {
//     b = c = d = a
//   } else if (c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }

// interface Direction {
//   top: number,
//   right: number,
//   bottom: number,
//   left: number
// }

// assigned(1,2)