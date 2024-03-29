/**
 * 整数拆分
 * @param n
 */
function integerBreak(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * j, j * dp[i - j]));
    }
  }

  return dp[n];
}

const result = integerBreak(4);

console.log(result);

export {};
