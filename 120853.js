function solution(s) {
  const sArr = [];
  s.split(" ").forEach((i) => {
    if (i === "Z") sArr.pop();
    else sArr.push(Number(i));
  });
  return sArr.reduce((a, c) => a + c, 0);
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
