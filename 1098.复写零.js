/*
 * @Author: 陈智焰 
 * @Date: 2019-06-17 17:55:14 
 * @Last Modified by:   陈智焰 
 * @Last Modified time: 2019-06-17 17:55:14 
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
        let count = 0;
        for(let value of arr){
            if(value ==0)
                count ++;
        }
        
        for(let i = arr.length-1;i>=0;i--){
            if(i+count<arr.length){
                arr[i+count]=arr[i];
            }
            if(arr[i]==0){
                count --;
                if(i+count<arr.length){
                    arr[i+count] = 0;
                }
            }
        }
};