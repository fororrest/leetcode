const minDistance = require('./72_edit_distance');

test('abc -> ab should equal 1 ', () => {
  const result = minDistance('abc', 'ab');
  expect(result).toEqual(1);
});

test('horse -> ros should equal 3 ', () => {
  const result = minDistance('horse', 'ros');
  expect(result).toEqual(3);
});