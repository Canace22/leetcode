# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:
# Input: ["flower", "flow", "flight"]
# Output: "fl"

# Example 2:
# Input: ["dog", "racecar", "car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

# Note:
# All given inputs are in lowercase letters a-z.

# 来源：力扣（LeetCode）
# 链接：https: // leetcode-cn.com/problems/longest-common-prefix


class Solution:
    def longestCommonPrefix(self, strs) -> str:
        if not strs:
            return ''
        r = []
        for item in zip(*strs):  # 将 str 转换为二维矩阵式，遍历每个单元
            print(item)
            # 若二维矩阵式每一项用 set 方式去重，三个都为重复的话，长度将为 1，此时 str 中每个元素该位置的值相同，将 true 添加到结果集合中
            r.append(len(set(item)) == 1)
        # 用于解决全部字符串相等时的情况，在后面加个 0，可以截取整个数组
        r += [0]
        # r.index(0) 表示相同字符串的截取位置，res 则为最长公共前缀
        res = strs[0][:r.index(0)]
        return res

    def __init__(self, arr):
        for item in ex:
            print(self.longestCommonPrefix(item))


ex = [["dog", "racecar", "car"], ["flower", "flow", "flight"], []]
Solution(ex)
