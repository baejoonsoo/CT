function solution(num, total) {
  const def = [...Array(num)].map((_, i) => i + 1);
  const defSum = def.reduce((a, c) => a + c, 0);
  const step = (total - defSum) / num;
  return def.map((n) => n + step);
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
