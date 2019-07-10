/*
 * @Author: 陈智焰 
 * @Date: 2019-07-10 10:39:11 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-07-10 10:42:43
 */
/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let colSetArr = []
    let rowSetArr = []
    let zSetArr = []
    for (let i = 0; i < 9; i++) {
        colSetArr[i] = new Set();
        rowSetArr[i] = new Set();
        zSetArr[i] = new Set();
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let v = board[i][j];
            if (v == ".")
                continue;
            let rowSet = rowSetArr[i];
            if( rowSet.has(v)){
                return false;
            }else{
                rowSet.add(v);
            }
            let colSet = colSetArr[j];
            if (colSet.has(v)) {
                return false;
            } else {
                colSet.add(v);
            }
            let zSet = zSetArr[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
            if (zSet.has(v)) {
                return false;
            } else {
                zSet.add(v);
            }
        }
    }
    return true;
};
