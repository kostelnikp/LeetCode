/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
   if (nums.length === 0) {
        return 0;
    }

    let slowPointer = 0; 
    for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) { 
        if (nums[fastPointer] !== nums[slowPointer]) {
            slowPointer++; 
            nums[slowPointer] = nums[fastPointer]; 
        }
    }
    return slowPointer + 1;

};

console.log(removeDuplicates([1,1,2]));