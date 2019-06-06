/*
 * @Author: 陈智焰 
 * @Date: 2019-06-06 23:07:59 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-06 23:55:39
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if(m ==0){
       for(let i = 0;i<n;i++){
           nums1[i] = nums2[i];
       }
    }
    for (let j = 0; j < n; j++)
        for (let i = m - 1; i >= 0; i--) {
            if (nums2[j] >= nums1[i]) {
                m++;
                for (let l = m - 1; l > i + 1; l--) {
                    nums1[l] = nums1[l - 1];
                }
                nums1[i + 1] = nums2[j];
                break;
            }
            if (i == 0){
                m++;
                for (let l = m - 1; l > i ; l--) {
                    nums1[l] = nums1[l - 1];
                }
                nums1[i ] = nums2[j];
                break;  
            }
        }
};
