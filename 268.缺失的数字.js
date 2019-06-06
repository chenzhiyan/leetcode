/*
 * @Author: 陈智焰 
 * @Date: 2019-06-06 23:08:02 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-06 23:09:47
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let result = []
    for (let key in nums) {
        result[nums[key]] = 1
    }
    let i = 0;
    while (true) {
        if (result[i] == undefined)
            return i;
        i++;
    }
};
