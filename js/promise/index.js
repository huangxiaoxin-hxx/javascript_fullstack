let promise = new Promise((resolve, reject) => {
  // 接收一个 callback 参数是成功函数与失败函数
  setTimeout(() => {
    let num = parseInt(Math.random()*100)
    // 如果大于50就调用成功函数,并且将状态变成Resolved
    if(num > 50) {
      resolve(num)
    }else {
      // 否则就调用失败函数,将状态变成Rejected
      reject(num)
    }
  }, 1000);
})

promise.then(res => {
  console.log(res+'成功')
  return 66
}, err => {
  console.log(err+'失败')
  return 233
}).then(res=> {
  console.log(res)
}, err => {
  console.log(err+'失败')
})

// 常规的 ajax 调用
// ajax('first');
// ajax('second');
// ajax('third');
// ajax('first').success(function(res){
//     ajax('second').success(function(res){
//         ajax('third').success(function(res){
//             //串行完毕可以执行你想要的内容了
//         });
//     })
// })

// .then链式调用
let promise = new Promise((resolve, reject) => {
  ajax('first').success(function (res) {
    resolve(res)
  })
})

promise.then(res=>{
  return new Promise((resovle,reject)=>{
      ajax('second').success(function(res){
          resolve(res)
      })
  })
}).then(res=>{
  return new Promise((resovle,reject)=>{
      ajax('second').success(function(res){
          resolve(res)
      })
  })
}).then(res=>{
  // 串行完毕你要做的xxx可以开始了
})
