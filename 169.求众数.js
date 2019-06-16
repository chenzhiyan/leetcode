/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let m = new Map();
    let half_n = nums.length >> 1;
    for (let value of nums) {
        if (!m.has(value)) {
            m.set(value, 0);
        } 
        let count = m.get(value);
        ++count;
        if (count > half_n)
            return value;
        m.set(value, count);
    }
};
majorityElement([3,2,3])
