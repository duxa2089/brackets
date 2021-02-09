module.exports = function check(str, bracketsConfig) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
      let flag = false;
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] == bracketsConfig[j][0]) {
              flag = true;
              if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                  if (result[result.length - 1] == bracketsConfig[j][0]) {
                      result.pop();
                      break;
                  }
              }
              result.push(bracketsConfig[j][1]);
              break;
          }
      }
      if (!flag) {
          if (result.length == 0 || str[i] != result[result.length - 1]) {
              return false;
          }
          result.pop();
      }
  }
  return result.length == 0 ? true : false;
};
