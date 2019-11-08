
// let a = {'name': '蜗牛'}
// let b = {'age': 18}

// let c = Object.assign(a, b)

// console.log(c)
// console.log(a)
// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: 'js',
//     price: '45'
//   }
// }

// let b = Object.assign({}, a)
// let b = {...a}

// a.name = 'jj'
// a.book.price = '55'

// console.log(b)

let a = {
  name: 'wn',
  book: {
    title: 'js',
    price: '45'
  }
}

let b = JSON.parse(JSON.stringify(a))