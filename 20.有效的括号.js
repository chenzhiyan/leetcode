/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let res = [];
    let m = new Map([[")", "("], ["}", "{"], ["]", "["]]);
    for (let v of s) {
        if (m.has(v)) {
            let r = res.pop();
            console.log(r)
            if (r != m.get(v))
                return false;
        } else {
            res.push(v);
        }
    }
    if (res.length == 0)
        return true;
    else
        return false;
};

