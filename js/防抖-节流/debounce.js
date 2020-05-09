const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,...args)
    },delay)
  }
}

const throtting = (fn, delay) => {
  
}