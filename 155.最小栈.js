/**
 * initialize your data structure here.
 */
var ListNode = function(val){
    this.val = val;
    this.next = null;
};
var MinStack = function() {
    this.head =  new ListNode(null);
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let node = new ListNode(x);
    node.next = this.head;
    this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.head.next!=null){
        let val = this.head.val;
        this.head = this.head.next;
        return val;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let tmp = this.head;
    if(tmp.next==null)
        return null;
    let mini = Infinity;
    while(tmp.val!=null){
        if(tmp.val<mini)
            mini =tmp.val;
        tmp=tmp.next;
    }
    return mini;
};

