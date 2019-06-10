/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 23:43:54 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-10 23:43:54 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0];
    let sum = 0;
    for (let v of nums) {
        sum = sum > 0 ? sum + v : v;
        if (res < sum)
            res = sum;
    }
    return res;
};