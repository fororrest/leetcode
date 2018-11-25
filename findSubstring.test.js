const findSubstring = require('./findSubstring.js');

test('adds 1 + 2 to equal 3', () => {
  expect(findSubstring("barfoothefoobarman", ["foo","bar"])).toBe([0, 9]);
});