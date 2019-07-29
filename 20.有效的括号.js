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
            if (res.pop() != m.get(v))
                return false;
        } else {
            res.push(v);
        }
    }
    return res.length == 0;
};

var isValid2 = function(s) {
    var st = []
    for(var l of s)
        if ((i="({[]})".indexOf(l))>-1)
            if (st[st.length-1]+i===5)
                st.length--;
            else
                st.push(i);
    return st.length===0
};