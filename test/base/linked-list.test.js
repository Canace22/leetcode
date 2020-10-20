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
        element: 'Banana',
        next: { element: 'Pear', next: { element: 'Grape', next: null } }
      },
      { element: 'Pear', next: { element: 'Grape', next: null } },
      { element: 'Grape', next: null },
      null
    ]);
  });

  test('find success', () => {
    expect(fruits.find('Banana')).toEqual({
      element: 'Banana',
      next: { element: 'Pear', next: { element: 'Grape', next: null } }
    });
    expect(fruits.find('peer')).toBeNull();
  });

  test('find prev success', () => {
    expect(fruits.findPrev('Banana')).toEqual({
      element: 'Apple',
      next: {
        element: 'Banana',
        next: { element: 'Pear', next: { element: 'Grape', next: null } }
      }
    });
    expect(fruits.findPrev('head')).toEqual({ element: 'Grape', next: null });
  });

  test('remove success', () => {
    fruits.remove('Banana');
    expect(fruits.display()).toEqual([
      { element: 'Pear', next: { element: 'Grape', next: null } },
      { element: 'Grape', next: null },
      null
    ]);
  });
});
