module.exports = function check(str, bracketsConfig) {
  let stack = [];
    str.split('').forEach((item, i) => {
        const type = bracketsConfig.findIndex(brackets => brackets.includes(item));
        if (item === bracketsConfig[type][1] && stack[stack.length - 1] === bracketsConfig[type][0])
            stack.pop();
        else stack.push(item);
    });
    return stack.length === 0;
}
