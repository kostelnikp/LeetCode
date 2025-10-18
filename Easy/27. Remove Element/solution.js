/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let indicesCount = 0;
  let positionQueue = [];

  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] === val) {
      indicesCount++;
      positionQueue.push(fastPointer);
      nums[fastPointer] = "_";
    } else {
      if (positionQueue.length) {
        let position = positionQueue.shift();
        nums[position] = nums[fastPointer];
        positionQueue.push(fastPointer);
        nums[fastPointer] = "_";
      }
    }
  }
  return nums.length - indicesCount;
};

/* let removeElement = function(nums, val) {
  let slowPointer = 0;
  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== val) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer++;
    }
  }
  return slowPointer;
}; */
