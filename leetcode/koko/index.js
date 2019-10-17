// @param {array} piles
// @param {int} H
// @return {int} lo
// @func 求最慢的吃法

// 1～11 O(n) 时间复杂度
// 5 可以吃到 左边就可以
// 反过来，吃不到 右边就可以 ，每次可以放弃一半的数
// 1～4    2
// 3～4    二分查找    log2N   8   3

const canEatAllBananas = (piles, H, mid) =>{
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile / mid);
    }
    return h <= H
}

const minEatingSpeed = (piles, H) =>{
    let lo = 1;
    let hi = Math.max(...piles);
    // console.log(hi);
    let mid;
    while(lo <= hi){
        mid = lo+((hi-lo)>>1);
        console.log(lo, mid, hi, '-------');
        if(canEatAllBananas(piles, H, mid)){
            hi = mid - 1;
            
        }else{
            lo = mid + 1;
        }
    }
    console.log(lo, mid, hi, '-------');
    return lo;
}

minEatingSpeed([3,6,7,11], 8);
