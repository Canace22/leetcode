const ListClass = require('../../base/lineked-list/linked-list');

describe('test linked list', () => {
  const fruits = new ListClass();
  const arr = ['Apple', 'Banana', 'Pear', 'Grape'];
  const insert = () => {
    arr.forEach((ele, index) => {
      if (!index) {
        fruits.insert(ele, 'head');
        return;
      }
      fruits.insert(ele, arr[index - 1]);
    });
  };
  insert();
  test('insert success', () => {
    expect(fruits.display()).toEqual([
      {
        val: 'Banana',
        next: { val: 'Pear', next: { val: 'Grape', next: null } }
      },
      { val: 'Pear', next: { val: 'Grape', next: null } },
      { val: 'Grape', next: null },
      null
    ]);
  });

  test('find success', () => {
    expect(fruits.find('Banana')).toEqual({
      val: 'Banana',
      next: { val: 'Pear', next: { val: 'Grape', next: null } }
    });
    expect(fruits.find('peer')).toBeNull();
  });

  test('find prev success', () => {
    expect(fruits.findPrev('Banana')).toEqual({
      val: 'Apple',
      next: {
        val: 'Banana',
        next: { val: 'Pear', next: { val: 'Grape', next: null } }
      }
    });
    expect(fruits.findPrev('head')).toEqual({ val: 'Grape', next: null });
  });

  test('remove success', () => {
    fruits.remove('Banana');
    expect(fruits.display()).toEqual([
      { val: 'Pear', next: { val: 'Grape', next: null } },
      { val: 'Grape', next: null },
      null
    ]);
  });
});
