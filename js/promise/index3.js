let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 2000)
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000)
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000)
});
Promise.race([promise1, promise2, promise3]).then(res => {
  console.log(res);
  //打印出2 为什么不打印出1呢？因为promise2先完成了其余的就忽略来
}, rej => {
  console.log('rejected');
  console.log(rej)
}
)