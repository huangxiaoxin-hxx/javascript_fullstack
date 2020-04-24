// 1 回调
fs.readFile('./', (content) => {
  setTimeout(() => {
    content += '123';
    fs.append('./', content, (err) => {

    })
  }, 3000);
})

// 2.Promise
Promise('./')
.then(() => {
  content += '123'
})
.then(() => {
  fs.append('./')
})

// Co 作者 TJ
es6 => generateor
co(
  function * test() {
    let c = yield fs.readFile();
    c += '123'
    let res = yield fs.append('./', c)
  }
)

// 3. async await
async () => {
  let c = await fs.readFile()
  c += '123'
  let res = await fs.append('./', c)
}