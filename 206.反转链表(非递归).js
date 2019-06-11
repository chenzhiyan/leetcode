/*
 * @Author: 陈智焰 
 * @Date: 2019-06-11 19:34:41 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-11 19:35:02
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null
    let curr = head;
    while (curr) {
        let tmp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = tmp
    }
    return pre;
};