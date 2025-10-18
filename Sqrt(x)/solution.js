/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
    if (x < 2) return x;

    let left = 0, right = x;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (mid * mid === x) {
        return mid
      }
      if (mid * mid < x) left = mid + 1;
      else right = mid;
    }
    return left - 1;
    
};

console.log(mySqrt(49));