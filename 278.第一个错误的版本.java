/*
 * @Author: 陈智焰 
 * @Date: 2019-06-10 00:03:48 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-10 23:44:02
 */
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */
 //278.第一个错误的版本
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int low = 1;
        int hight = n;
        int mid = (hight -low)/2+low;
        while(hight>low){
            if(isBadVersion(mid)==false){
                low = mid+1;
            }else{
                hight = mid;
            }
            mid = (hight -low)/2+low;
        }
        return low;
    }
}