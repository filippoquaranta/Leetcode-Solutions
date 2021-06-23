var isMatch = function (s, p) {
  var MainMap = {};
  var lengthOfPattern = p.length;
  var lengthOfString = s.length;
  return CheckingFunction(0, 0);
  function CheckingFunction(MainString, MainPattern) {
    if (MainMap[MainString + ":" + MainPattern] !== undefined)
      return MainMap[MainString + ":" + MainPattern];
    if (MainString > lengthOfString) return false;
    if (MainString === lengthOfString && MainPattern === lengthOfPattern)
      return true;
    if (p[MainPattern] === "." || p[MainPattern] === s[MainString]) {
      MainMap[MainString + ":" + MainPattern] =
        p[MainPattern + 1] === "*"
          ? CheckingFunction(MainString + 1, MainPattern) ||
            CheckingFunction(MainString, MainPattern + 2)
          : CheckingFunction(MainString + 1, MainPattern + 1);
    } else {
      MainMap[MainString + ":" + MainPattern] =
        p[MainPattern + 1] === "*"
          ? CheckingFunction(MainString, MainPattern + 2)
          : false;
    }
    return MainMap[MainString + ":" + MainPattern];
  }
};
