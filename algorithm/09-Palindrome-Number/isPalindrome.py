# 一刷时间: 2019
# 链接：https: // leetcode-cn.com/problems/palindrome-number

class Solution:
    def isPalindrome(self, x: int) -> bool:
        # x 若是 0 或者负数，返回 false
        if (x < 0 or (int(x % 10 == 0) and x != 0)):
            return False
        # 初始化翻转数字
        reverse = 0
        # 若原始数字 x 大于从后面开始翻转的数字，说明已经翻转了后半部分，翻转阶段完成
        while (x > reverse):
            reverse = int(reverse * 10) + int(x % 10)
            x = int(x / 10)
            print('x:', x)
            print('reverse', reverse)
        # 若翻转的后半部分数字 reverse 等于前半部分数字，返回 true，否则返回 false，利用 int 向上取整的特性，当 x 为奇数时，去掉最后一位
        return x == reverse or x == int(reverse / 10)

    def __init__(self, arr):
        for item in arr:
            print(self.isPalindrome(item))


arr = [121, -121, 10]
Solution(arr)
