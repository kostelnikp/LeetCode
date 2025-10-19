//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let l1Num = "", l2Num = "";

    while (l1) {
        l1Num = l1.val + l1Num;
        l1 = l1.next;
    }
    while (l2) {
        l2Num = l2.val + l2Num;
        l2 = l2.next;
    }

    let sumStr = String(BigInt(l1Num) + BigInt(l2Num));
    let currentNode = dummyHead;

    for (let i = sumStr.length - 1; i >= 0; i--) {
        currentNode.next = new ListNode(parseInt(sumStr[i]));
        currentNode = currentNode.next;
    }

    return dummyHead.next;


};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
