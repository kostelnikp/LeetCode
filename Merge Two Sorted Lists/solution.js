function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let mergedList = new ListNode(0);
  let currentNode = mergedList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      currentNode = currentNode.next;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      currentNode = currentNode.next;
      list2 = list2.next;
    }
  }

  if (list1 !== null) currentNode.next = list1;
  if (list2 !== null) currentNode.next = list2;
  return mergedList.next;
};

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);
for (let curr = mergedList; curr !== null; curr = curr.next) {
  console.log(curr.val);
}
