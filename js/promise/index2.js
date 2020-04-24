let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000)
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 4000)
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000)
});
let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(res => {
  console.log(res);
}, err => {
  console.log(err)
})