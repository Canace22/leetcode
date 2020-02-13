# 经典算法解集

### 一、KNN 算法

#### 算法描述

1、准备

    找出邻近值，这个邻近值 k 可以是任意数，1， 1000 甚至 10000 都可以。

2、分类

    用毕达哥拉斯公式算出该对象与邻近值的相似度（该对象与邻近值得距离），并将该对象归到相似度最高的那一个近邻类里。

3、回归

    重新找到该对象的近邻，算出这些近邻各特征的平均值，形成新的特征组合，即新的对象，这个对象就是预估的结果，也就是通常所说的预测值。

#### 算法实现

```python
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
```
