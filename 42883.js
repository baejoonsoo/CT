const solution = (number, k) => {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack && parseInt(stack.at(-1)) < parseInt(number[i]) && k > 0) {
      stack.pop();
      k -= 1;
    }

    if (k == 0) {
      stack += [...number.slice(i)];
      break;
    }

    stack.push(number[i]);
  }
  stack = k > 0 ? stack.slice(0, -k) : stack;

  return stack;
};

console.log(solution("1924", 2));
