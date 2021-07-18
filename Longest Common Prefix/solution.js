/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  var min = strs[0].length;
  for (var i = 1; i < strs.length; i++) {
    var j = 0;
    while (j < strs[i].length && j < strs[0].length) {
      if (strs[i][j] !== strs[0][j]) break;
      j++;
    }
    min = Math.min(min, j);
  }
  return strs[0].substring(0, min);
};
