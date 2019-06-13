/*
 * @Author: 陈智焰 
 * @Date: 2019-06-06 23:07:59 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-13 22:14:30
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let nums1_copy = nums1.slice();
    let count = 0;
    for (var i = 0, j = 0; i < m && j < n;) {
        nums1[count++] = nums1_copy[i] < nums2[j] ? nums1_copy[i++] : nums2[j++]
    }
    while (i < m) {
        nums1[count++] = nums1_copy[i++];
    }
    while (j < n) {
        nums1[count++] = nums2[j++];
    }
    return nums1;   
};

