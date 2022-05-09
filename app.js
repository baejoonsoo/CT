const solution = (s) => {
  const stack = [];
  const t = s.split("");

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "(") {
      stack.push("(");
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack[stack.length - 1] === "(") {
    return false;
  }
  return true;
};

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
