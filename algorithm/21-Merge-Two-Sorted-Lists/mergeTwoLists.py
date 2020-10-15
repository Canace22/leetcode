# 一刷时间: 2019
# 链接：https: // leetcode-cn.com/problems/merge-two-sorted-lists

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def mergeTwoLists(self, l1, l2):
        prehead = ListNode(-1)

        prev = prehead
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        prev.next = l1 if l1 is not None else l2

        return prehead.next

    def __init__(self, arr1, arr2):
        n1 = ListNode(arr1[0])
        x1 = ListNode(arr2[0])
        self.mergeTwoLists(n1, x1)
        print(self.mergeTwoLists(n1, x1).val)


Solution([1, 2, 4], [1, 3, 4])
