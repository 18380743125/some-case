/**
 * 不同的二叉搜索树
 * @param n
 */
function numTrees(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}

const result = numTrees(3);
console.log(result);

export {};
