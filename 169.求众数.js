/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//map法
var majorityElement2 = function (nums) {
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

//摩尔投票法
var majorityElement = function (nums) {
    let count = 0,n =0;
    for(let value of nums){
        if (count==0){
            n=value;
            count++;
        }else if(value==n){
            count++;
        } else if (value != n) {
            count--;
        }
    }
    return n;
};
console.log(majorityElement([3, 3, 4]))
