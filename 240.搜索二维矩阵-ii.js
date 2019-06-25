/*
 * @Author: 陈智焰 
 * @Date: 2019-06-25 22:45:21 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-25 22:46:21
 */
/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length == 0)
        return false;
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        let n = matrix[row][col]
        if (n == target) {
            return true;
        } else if (n > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;

};

let arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]]
console.log(searchMatrix(arr, 10));

