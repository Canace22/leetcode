# 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

# 有效字符串需满足：
# 左括号必须用相同类型的右括号闭合。
# 左括号必须以正确的顺序闭合。
# 注意空字符串可被认为是有效字符串。

# 示例 1:
# 输入: "()"
# 输出: true

# 示例 2:
# 输入: "()[]{}"
# 输出: true

# 示例 3:
# 输入: "(]"
# 输出: false

# 示例 4:
# 输入: "([)]"
# 输出: false

# 示例 5:
# 输入: "{[]}"
# 输出: true

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/valid-parentheses


class Solution:
    def isValid(self, s):
        # 简洁但是效率低
        # while '{}' in s or '()' in s or '[]' in s:
        #     s = s.replace('{}', '')
        #     s = s.replace('[]', '')
        #     s = s.replace('()', '')
        # return s == ''
        stack = []  # 初始化栈
        mapping = {')': '(', ']': '[', '}': '{'}  # 字典存储所有的匹配类型
        for char in s:  # 遍历字符串
            if (char in mapping):  # 当前字符为闭合符号时
                top_element = stack.pop() if stack else '#'  # 栈顶元素出栈
                if mapping[char] != top_element:  # 没有匹配的类型，返回 false
                    return False
            else:
                stack.append(char)  # 开括号存储到栈里
        return not stack

    def _init_(self):
        return self.isValid("([)]")


res = Solution()
print(res._init_())
