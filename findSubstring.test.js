const findSubstring = require('./findSubstring.js');

const testCase = [
  ["a", ["a"], [0]],
  ["", [], []],
  ["mississippi", ["is"], [1, 4]],
  ["barfoothefoobarman", ["foo", "bar"], [0, 9]],
  ["barfoofoobarthefoobarman", ["bar","foo","the"], [6, 9, 12]],
  ["wordgoodstudentgoodword", ["word", "student"], []],
  ["wordgoodgoodgoodbestword", ["word", "good", "best", "word"], []],
  ["wordgoodgoodgoodbestword", ["word","good","best","good"], [8]],
  ["abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa", ["cac","aaa","aba","aab","abc"], [97]],
  ["abcbaaaccaabbcababaaabccaabccccbbccbaabcbccacacacabcbbbacbcbbccabaccbbbcbaabbabbaaaacaacbcacbbaacbcbcbabbbcacbbacaacbbbcacccbbcacabbbacaccbcbaababa", ["bcb","baa","cac","aca","cca"], [35]]
];

testCase.forEach(item => {
  test(`${item[0]} [${item[1]}] should equal [${item[2]}]`, () => {
    const result = findSubstring(item[0], item[1]);
    expect(result).toEqual(item[2]);
  });
})

// test('"a" ["a"] should equal [0] ', () => {
//   const result = findSubstring('a', ['a']);
//   expect(result).toEqual([0]);
// });

// test('"" [] should equal [] ', () => {
//   const result = findSubstring('', []);
//   expect(result).toEqual([]);
// });

// test('"mississippi" ["is"] should equal [1, 4] ', () => {
//   const result = findSubstring('mississippi', ["is"]);
//   expect(result).toEqual([1, 4]);
// });

// test('"barfoothefoobarman" ["foo", "bar"] should equal [0, 9] ', () => {
//   const result = findSubstring('barfoothefoobarman', ["foo", "bar"]);
//   expect(result).toEqual([0, 9]);
// });

// test('"barfoofoobarthefoobarman" ["bar","foo","the"] should equal [6, 9, 12] ', () => {
//   const result = findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"]);
//   expect(result).toEqual([6, 9, 12]);
// });

// test('"wordgoodstudentgoodword" ["word", "student"] should equal [] ', () => {
//   const result = findSubstring('wordgoodstudentgoodword', ["word", "student"]);
//   expect(result).toEqual([]);
// });

// test('"wordgoodgoodgoodbestword" ["word", "good", "best", "word"] should equal [] ', () => {
//   const result = findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']);
//   expect(result).toEqual([]);
// });

// test('"wordgoodgoodgoodbestword" ["word","good","best","good"] should equal [] ', () => {
//   const result = findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]);
//   expect(result).toEqual([8]);
// });