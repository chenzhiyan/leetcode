/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix == null || matrix.length == 0) {
        return 0
    }
    let maxSzie = 0;
    let dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == '1') {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
            }
            maxSzie = Math.max(dp[i][j], maxSzie);
        }

    }
    return maxSzie**2;
};
// @lc code=end

