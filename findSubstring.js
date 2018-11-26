/* eslint-disable */
/**
 * 30. Substring with Concatenation of All Words
 * You are given a string, s, and a list of words, words,
 * that are all of the same length. Find all starting indices of
 * substring(s) in s that is a concatenation of each word in words
 * exactly once and without any intervening characters.
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 */

/**
 * getAllIndex
 * @param {string} s
 * @param {string} word
 */
function getAllIndex(s, word) {
  const indexes = [];

  // const sLen = s.length;
  const firstIdx = s.indexOf(word);

  if (firstIdx === -1) {
    return [];
  }
  indexes.push(firstIdx);

  let idx = firstIdx;
  while (idx !== -1) {
    idx = s.indexOf(word, idx + 1);
    if (idx !== -1) {
      indexes.push(idx);
    }
  }

  return indexes;
}

function serialArray(arr) {
  const lengthArr = [];
  const productArr = [];
  const result = [];
  let length = 1;
  for (var i = 0; i < arr.length; i++) {
    const len = arr[i].length;
    lengthArr.push(len);
    const product = i === 0 ? 1 : arr[i - 1].length * productArr[i - 1];
    productArr.push(product);
    length *= len;
  }
  for (var i = 0; i < length; i++) {
    let resultItem = [];
    for (let j = 0; j < arr.length; j++) {
      resultItem.push(arr[j][Math.floor(i / productArr[j]) % lengthArr[j]]);
    }
    result.push(resultItem);
  }
  return result;
}

/**
 * 全排列
 * @param {*} xs
 */
function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  let result = [];

  console.time('idxArray')
  const idxArray = words.map((item) => {
    const indexes = getAllIndex(s, item);
    return indexes.map(idx => ({
      word: item,
      index: idx,
    }));
  });

  console.timeEnd('idxArray')
  // console.log(idxArray)
  console.log(idxArray.map(a => a.map(item => item.index)));
  console.log('----------');

  console.time('pArray')
  let pArray = [];
  if (idxArray.length === 0) {
    return [];
  } else if (idxArray.length === 1) {
    idxArray[0].forEach(item => {
      if (!result.includes(item.index)) {
        result.push(item.index);
      }
    });
    return result;
  }

  // pArray = idxArray.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
  pArray = serialArray(idxArray);

  console.timeEnd('pArray')

  // console.log(pArray)
  // console.log(pArray.map(a => a.map(item => item.index)));
  // console.log('----------');

  console.time('fullList')
  const fullList = [];
  pArray.forEach(item => {
    perm(item).forEach(arr => {
      fullList.push(arr);
    })
  });
  console.timeEnd('fullList')

  console.log(fullList.length);
  // console.log(fullList.map(a => a.map(item => item.index)));
  // console.log('----------');

  console.time('filterList')
  const filterList = fullList.filter((itemArr) => {
    const result = itemArr.reduce((a, b) => {
      if (a && b.index > a.index && b.index === a.index + a.word.length) {
        // console.log(`a: ${a.index}, b: ${b.index}`);
        return b;
      }
      return null;
    });
    return Boolean(result);
  });

  console.timeEnd('filterList')

  // console.log(filterList);
  // console.log('----------')

  filterList.forEach(item => {
    if (!result.includes(item[0].index)) {
      result.push(item[0].index);
    }
  });

  console.timeEnd('共花费了')
  return result;
}

// findSubstring('', []);
// findSubstring('a', ['a'])
// findSubstring('barfoothefoobarman', ['foo', 'bar']);
// findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"]);
// findSubstring('wordgoodstudentgoodword', ['word', 'student']);
// findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']);
// findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]);
// findSubstring('mississippi', ["is"]);
// findSubstring("abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa", ["cac","aaa","aba","aab","abc"]);
const result = findSubstring("abcbaaaccaabbcababaaabccaabccccbbccbaabcbccacacacabcbbbacbcbbccabaccbbbcbaabbabbaaaacaacbcacbbaacbcbcbabbbcacbbacaacbbbcacccbbcacabbbacaccbcbaababa", ["bcb","baa","cac","aca","cca"]);
console.log(result);


module.exports = findSubstring;