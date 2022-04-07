const solution = (x) =>
  !(x % [0, ...x.toString()].reduce((pre, current) => pre + parseInt(current)));

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
