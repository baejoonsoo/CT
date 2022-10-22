function solution(n) {
  let pt = 1;
  let i = 2;
  while (true) {
    console.log("test", pt, i);
    if (pt >= n) return i - 1;
    pt *= i;
    i++;
  }
}

console.log(solution(3628800));
console.log(solution(7));
