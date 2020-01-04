var values = [3, 4, 5],
  weight = [2, 3, 4],
  capacity = 5,
  n = values.length

function pack(values, weight, capacity, n) {
  let T = [] //  [[0,0,3,3,3,3],[0,0,3,4,4,7],[0,0,3,4,5,7]]
  for (let i = 0; i < n; i++) {
    T[i] = [values[i], weight[i]]
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) {
        T[i][j] = 0
        continue
      }
      if (j < weight[i]) {
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i - 1][j]
        }
        continue;
      }
      
      if (i === 0) {
        T[i][j] = values[i]
      } else {
        T[i][j] = Math.max(values[i] + T[i - 1][j - weight[i]], T[i - 1][j])
      }
    }
  }
  // console.log(T)
  findValue(values, weight, capacity, n, T)
  return T
}
function findValue(values, weight, capacity, n, T) {// 找需要的物品
    var i = n - 1, j = capacity
    while (i > 0 && j > 0) {
      if (T[i][j] !== T[i - 1][j]) {
        console.log(`选择物品${i},重量${weight[i]},价值${values[i]}`)
        j = j-weight[i]
        i--
      } else {
        i--
      }
    }
    if (i === 0) {
      if(T[i][j] !== 0) {
        console.log(`选择物品${i},重量${weight[i]},价值${values[i]}`)
      }
    }
}

pack(values, weight, capacity, n)