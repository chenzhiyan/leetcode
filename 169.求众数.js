/*
 * @Author: 陈智焰 
 * @Date: 2019-06-25 20:51:35 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-25 20:51:35 
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
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
    let n = 0;
    let count = 0;
    let m ;
    for(let v of nums){
        if(0 == count){
            m = v;
            count ++;
        }else if(v == m){
            count ++;
        }else{
            count --;
        }
    }
    return m;
};
