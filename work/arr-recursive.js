const data = require('./data/data');
function buildTopicWithSection (courseware, name = []) {
  // @param 
  // courseware: []
  // name: []
  // return: []
  let topics = [];
  if (!courseware) {
    return [];
  }
  // 遍历当前节点
  for (let k = 0; k < courseware.length; k++) {
    let ele = courseware[k];
    // 若节点是末端节点，拼接 name，把习题塞进去
    if (ele.content2) {
      ele.name = name.concat([ele.name]).join(' ');
      ele.topics = [];
      for (let i = 0; i < ele.content2.length; i++) {
        for (let j = 0; j < ele.content2[i].exercise.length; j++) {
          ele.topics.push(ele.content2[i].exercise[j]);
        }
      }
      delete ele.content2;
      topics.push(ele);
    }
    // 去除第一层的单元名
    const newName = ele.level === 0 ? [] : name.concat([ele.name]);
    // 若不是末端节点递归该节点，传入父节点和当前节点拼接的新 name 给子节点
    topics = topics.concat(buildTopicWithSection(ele.children, newName));
  }
  return topics;
}

const test = buildTopicWithSection(data);
console.log(test);
