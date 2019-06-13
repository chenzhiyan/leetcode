/*
 * @Author: 陈智焰 
 * @Date: 2019-06-12 23:04:02 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-12 23:04:02 
 */
/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum =0;
    while(n>0){
         if(n&1==1)
            sum++;
        n = Math.floor(n/2);
    }
    return sum;
};
