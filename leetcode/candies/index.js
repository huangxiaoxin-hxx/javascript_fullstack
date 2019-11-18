// es6 新特性
const distributeCandies = function (candies) {
  // 糖果的种类数
  var count = 0 //总类数 unique
  let obj = {};
  candies.forEach(function(item) {
    //  如果他出现过
    if(!obj[item]){
      obj[item] = 1; // 出现过了
      count ++  // 加上总类数
    }
  });
  return count >= (candies.length/2) ? (candies.length>>1) : count
}

console.log(distributeCandies([1,1,2,2,3,3]))