# k 邻近值算法

# 已知所有特征集合，第一个特征为颜色，第二个特征为所属类别
L = {'orange': [1, 0], 'apple': [2, 0], 'flower': [1, 1], 'fish': [5, 5]}

# 未知物体
test = [1.1, 0]
# 所有的相似度集合
results = []
# 已知所有水果的集合
items = []

for item in L:
    x = L[item][0] - test[0]
    y = L[item][1] - test[1]
    instance = x ** 2 + y ** 2
    results.append(instance ** 0.5)
    items.append(item)

# 最大相似度
minValue = min(results)
# 物体名称
result = items[results.index(minValue)]

print(minValue, result)
