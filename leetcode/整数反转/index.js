function res(x) {
  let num = Number(Math.abs(x).toString().split("").reverse().join("")) 
  if (x < 0) {
    return num <= Math.pow(2, 31) ? -num : 0;
  } else {
    return num < Math.pow(2, 31) ? num : 0;
  }
}

console.log(res(-12345))