# promise
- Promise的实例有三个状态，Pending（进行中）、Resolved（已完成）、Rejected（已拒绝）。
- 你把一件事情交给promise时，它的状态就是Pending，任务完成了状态就变成了Resolved、没有完成失败了就变成了Rejected。
- then方法接收两个函数，第一个是承诺成功（状态为resolved）的回调函数，一个承诺失败（状态为rejected）的回调函数。
- then方法的返回值不是一个promise对象就会被包装成一个promise对象，所以then方法支持链式调用。

# Promise.all 与 Promise.race的妙用
- Promise.all 接收一个数组，数组的每一项都是一个promise对象。当数组中所有的promise的状态都达到resolved的时候，Promise.all的状态就会变成resolved，如果有一个状态变成了rejected，那么Promise.all的状态就会变成rejected（任意一个失败就算是失败），这就可以解决我们并行的问题。调用then方法时的结果成功的时候是回调函数的参数也是一个数组，按顺序保存着每一个promise对象resolve执行时的值。

- Promise.race 竞速模式 也是接受一个每一项都是promise的数组。但是与all不同的是，第一个promise对象状态变成resolved时自身的状态变成了resolved，第一个promise变成rejected自身状态就会变成rejected。第一个变成resolved的promsie的值就会被使用。竞速模式只输出最块执行完毕的那个

Promsie.race还有一个很重要的实际用处就是，有时候我们要去做一件事，但是超过三秒钟左右我们就不做了那怎么办？ 这个时候可以使用Promise.race方法
`
  Promise.race([promise1,timeOutPromise(3000)]).then(res=>{})
`
- then 的执行总是在最后的