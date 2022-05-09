const solution = (s) => {
  const numList = s.split(" ").map((s) => parseInt(s));
  const max = Math.max(...numList);
  const min = Math.min(...numList);

  return `${min} ${max}`;
};

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
