var lengthOfLongestSubstring = function(s) {
  let num = 0, res = 0
  let m = ''
  for (n of s) {  // n 为 s 字符串中的每一个 char
    if (m.indexOf(n) == -1) { // m 字符串中有没有 n
      m += n
      num++
      res = res > num ? res : num // res 得到最大的串长度
    } else { 
      // 如果 m 中 有 n
      m += n
      m = m.slice(m.indexOf(n) + 1) // indexOf 会返回m中第一个n的下标，slice从n的后一位开始截取
      num = m.length // 不管怎么截取，现在的num 都不可能大于 res
    }
  }
  return res
};

// let n = 'a'
// let m = 'abaca'
// m = m.slice(m.indexOf(n) + 1)
// console.log(m)