/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let nums1Pointer = m - 1;
    let nums2Pointer = n - 1;
    let mergePointer = m + n - 1;

    while (nums1Pointer >= 0 && nums2Pointer >= 0) {
        if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums1[mergePointer] = nums1[nums1Pointer];
            nums1Pointer--;
        } else {
            nums1[mergePointer] = nums2[nums2Pointer];
            nums2Pointer--;
        }
        mergePointer--;
    }

    while (nums2Pointer >= 0) {
        nums1[mergePointer] = nums2[nums2Pointer];
        mergePointer--;
        nums2Pointer--;
    }
   
   
    
   
    console.log(nums1);
    
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);