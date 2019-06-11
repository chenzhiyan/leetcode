/*
 * @Author: 陈智焰 
 * @Date: 2019-06-11 20:53:52 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-11 20:53:52 
 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums.slice();
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let nums = this.nums.slice();
    let shuffleNums = [];
    while (nums.length > 0) {
        let i = Math.floor(Math.random() * nums.length);
        shuffleNums.push(nums[i]);
        nums.splice(i, 1);
    }
    return shuffleNums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */