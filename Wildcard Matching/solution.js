const isMatch = (text1, text2) => {
  let dp = [...new Array(text1.length + 1)].map(() =>
    Array(text2.length + 1).fill(false)
  );
  dp[0][0] = true;
  for (var col = 1; col <= dp[0].length; col++) {
    if (text2[col - 1] === "*") {
      dp[0][col] = dp[0][col - 1];
    }
  }
  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      let text1Letter = text1[row - 1],
        text2Letter = text2[col - 1];

      if (text1Letter == text2Letter || text2Letter == "?")
        dp[row][col] = dp[row - 1][col - 1];
      else if (text2Letter == "*")
        dp[row][col] = dp[row][col - 1] || dp[row - 1][col];
    }
  }

  return dp[text1.length][text2.length];
};