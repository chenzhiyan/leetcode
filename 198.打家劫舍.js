/*
 * @Author: 陈智焰 
 * @Date: 2019-06-11 20:18:38 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-11 20:19:00
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let sumEven = 0;
    let sumOdd = 0;
    let max = (a, b) => a > b ? a : b;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            sumEven += nums[i];
            sumEven = max(sumEven, sumOdd);
        } else {
            sumOdd += nums[i];
            sumOdd = max(sumEven, sumOdd);
        }
    }
    return max(sumEven, sumOdd);
};