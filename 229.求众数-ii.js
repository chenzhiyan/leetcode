/*
 * @Author: 陈智焰 
 * @Date: 2019-06-25 20:51:29 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-25 21:30:20
 */
/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement2 = function (nums) {
    let result = []
    let m = new Map();
    let n_3 = Math.floor(nums.length / 3);
    for (let value of nums) {
        if (!m.has(value)) {
            m.set(value, 0)
        }
        let count = m.get(value);
        count++;
        if (count > n_3) {
            count = -Infinity;
            result.push(value);
        }
        m.set(value, count);
    }
    return result;
};

//摩尔投票法
var majorityElement = function (nums) {
    let a, b;
    let countA = 0, countB = 0;
    for (let v of nums) {
        if (countA > 0 && countB > 0) {
            if (v != a && v != b) {
                countA--;
                countB--;
            } else if (v == a) {
                countA++;
            } else {
                countB++;
            }
        } else if (countA > 0) {
            if (a == v) {
                countA++;
            } else {
                b = v;
                countB++;
            }
        } else if (countB > 0) {
            if (b == v) {
                countA++;
            } else {
                a = v;
                countA++
            }
        } else {
            a = v;
            countA++;
            b = NaN;
            //当a,b,票数都为0时,
            //下一个人会先顶掉a,
            //如果下一个人是最后一个人,则b会被保留,例子[0,-1,2,-1]
        }
    }
    let res = []
    //题目没有保证数组有众数,所以要自行判断
    countA = 0, countB = 0;
    for (let v of nums) {
        if (v == a)
            countA++;
        if (v == b)
            countB++
    }
    if (countA > nums.length / 3)
        res.push(a)
    if (countB > nums.length / 3)
        res.push(b)
    return res;
};
console.log(majorityElement([0, -1, 2, -1]))
