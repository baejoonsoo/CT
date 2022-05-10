const solution = (n) => {
  const nCount = n.toString(2).match(/1/g).length;
  let i = n + 1;

  while (true) {
    if (i.toString(2).match(/1/g).length === nCount) {
      return i;
    }
    i++;
  }
};

console.log(solution(78));
console.log(solution(15));
