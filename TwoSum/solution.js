let twoSum = function (nums, target) {
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let doplnok = target - nums[i];
        if (numMap.has(doplnok)) {
            return [numMap.get(doplnok), i];
        }
        numMap.set(nums[i], i);
    }

    return [];

};

