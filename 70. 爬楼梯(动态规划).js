/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 23:05:40 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-10 23:43:56
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = [];
    memo[1] = 1;
    memo[2] = 2;
    for (let i = 3; i <= n; i++)
        memo[i] = memo[i - 1] + memo[i - 2];
    return memo[n];

};