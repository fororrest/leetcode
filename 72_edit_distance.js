/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j += 1) {
    dp[0][j] = j;
  }

  // console.log(dp);

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const d1 = dp[i - 1][j] + 1;
      const d2 = dp[i][j - 1] + 1;
      const d3 = dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0);

      dp[i][j] = Math.min(d1, d2, d3);
    }
  }

  return dp[m][n];
}

module.exports = minDistance;
