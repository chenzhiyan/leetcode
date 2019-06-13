/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//先转置数组,再按行反转
var rotate = function (matrix) {
    let len = matrix.length;
    for (let i = 0; i < len ; i++) {
        for (let j = i; j < len ; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for (let i = 0; i < matrix.length ; i++) {
        matrix[i].reverse();
    }
    return matrix;
};


