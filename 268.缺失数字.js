/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//方法1 用Set,速度快,需要O(n)空间
var missingNumber = function (nums) {
    let s = new Set(nums);
    let n = 0
    while (true) {
        if (s.has(n)) {
            n++;
        }
        else {
            return n;
        }
    }

};
//方法2,用异或,只需要O(1)空间
var missingNumber2 = function (nums) {
    let n = nums.length;
    let res = n;
    for (let i = 0; i < n; i++) {
        res ^= nums[i];
        res ^= i;
    }
    return res;
};

