"use strict";
const nums = [1, 5, 3, 7, 2];
function sort(nums) {
    let i, j, temp;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length - 1; j++) {
            if (nums[j + 1] < nums[j]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
const sorted = sort(nums);
console.log(sorted);
