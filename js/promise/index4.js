const setDelay = (millisecond) => {
  return new Promise((resolve, reject)=>{
      if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
      setTimeout(()=> {
        resolve(`我延迟了${millisecond}毫秒后输出的`)
      }, millisecond)
  })
}

const setDelaySecond = (seconds) => {
  return new Promise((resolve, reject)=>{
      if (typeof seconds != 'number' || seconds > 10) reject(new Error('参数必须是number类型，并且小于等于10'));
      setTimeout(()=> {
        console.log(`先是setDelaySeconds函数输出，延迟了${seconds}秒，一共需要延迟${seconds+2}秒`)
        resolve(setDelay(2000)) // 这里依赖上一个Promise
      }, seconds * 1000)
  })
}

// setDelaySecond(3).then((result)=>{
//   console.log(result)
// }).catch((err)=>{
//   console.log(err);
// })
// setDelay('2000')
// .then((result)=>{
//   console.log('第一步完成了');
//   console.log(result)
//   return setDelaySecond(3)
// })
// .catch((err)=>{ // 这里移到第一个链式去，发现上面的不执行了，下面的继续执行
//   console.log(err);
// })
// .then((result)=>{
//   console.log('第二步完成了');
//   console.log(result);
// })
// const demo = async ()=>{
//   let result = await new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve('我延迟了一秒')
//     }, 1000)
//   });
//   console.log('我由于上面的程序还没执行完，先不执行“等待一会”');
//   return result;
// }
// // demo的返回当做Promise
// demo().then(result=>{
// console.log('输出',result); // 输出 我延迟了一秒
// })

let count = 6;
const demo = async ()=>{
  const result = await setDelay(1000);
  console.log(result);
  const result1 = await setDelaySecond(count);
  console.log(result1);
  if (count > 5) {
      return '我退出了，下面的不进行了';
    // return; 
    // return false; // 这些写法都可以
    // return null;
  }
  console.log(await setDelay(1000));
  console.log('完成了');
};
demo().then(result=>{
  console.log(result);
})
.catch(err=>{
  console.log(err);
})