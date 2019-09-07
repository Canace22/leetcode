# 给出一个裴波那切数，返回其位置

# 递归法求解


# class Solution:
#     def fib(self, n: int):
#         if n < 0:
#             return 0
#         if n == 1:
#             return 1
#         return self.fib(n - 1) + self.fib(n - 2)


# x = Solution()
# print(x.fib(10))

# 自顶向下的备忘录法


class SolutionUp:
    def Fibonacci(self, n: int):
        if n <= 0:
            return n
        Memo = [x for x in range(n+1)]
        print(Memo)
        r = [x for x in range(n+1)]
        print('r', r)
        for i in r:
            Memo[i] = 1
        return self.fib(n, Memo)

    def fib(self, n: int, Memo: list):
        if Memo[n] != -1:
            return Memo[n]
        if n < 2:
            Memo[n] = 1
        else:
            Memo[n] = self.fib(n - 1, Memo) + self.fib(n - 2, Memo)
        return Memo[n]


xUp = SolutionUp()
print(xUp.Fibonacci(8))
