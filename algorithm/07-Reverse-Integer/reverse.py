# 一刷时间: 2019
# 链接：https: // leetcode-cn.com/problems/reverse-integer


class Solution:
    def reverse(self, x):
        INT_MAX = 2**31
        INT_MIN = -2 ** 31
        print(INT_MAX, INT_MIN)
        cur = 0
        while x != 0:
            if (x < 0):
                pop = int(x % -10)
            else:
                pop = int(x % 10)
            if cur > INT_MAX / 10 or (cur == INT_MAX / 10 and pop > 7):
                return 0
            if cur < INT_MIN / 10 or (cur == INT_MIN / 10 and pop < -8):
                return 0
            cur = cur * 10 + pop
            x = int(x/10)
        return cur

    def __init__(self, arr):
        for item in arr:
            print(self.reverse(item))


arr = [123, -123, 120]
Solution(arr)
