module.exports = function check(str, bracketsConfig) {

  const opens = [];
  const closes = [];
  const brObj = {};
  const stack = [];
  let current = '';

  if (str.length % 2 !== 0) return false;

  for (a = 0; a < bracketsConfig.length; a++) {
    brObj[`${bracketsConfig[a][1]}`] = bracketsConfig[a][0];
    opens[a] = bracketsConfig[a][0];
    closes[a] = bracketsConfig[a][1];
  }

  for (a = 0; a < str.length; a++) {
    current = str[a];
    if (closes.includes(current)) {
      if (brObj[current] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}
