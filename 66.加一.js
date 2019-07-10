/*
 * @Author: 陈智焰 
 * @Date: 2019-07-10 11:00:35 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-07-10 11:00:35 
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length;
    let addOne = Math.floor((digits[n - 1] + 1) / 10);
    digits[n - 1] = Math.floor((digits[n - 1] + 1) % 10);
    for (let i = n - 2; i >= 0; i--) {
        let tmp = digits[i];
        digits[i] = Math.floor((digits[i] + addOne) % 10);
        addOne = Math.floor((tmp + addOne) / 10);
    }
    if (addOne != 0)
        digits.unshift(1);
    return digits;
};
