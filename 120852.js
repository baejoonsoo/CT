function solution(n) {
  const mt = new Set();
  let i = 2;

  while (n >= i) {
    if (n % i === 0) {
      mt.add(i);
      n /= i;
    } else {
      i++;
    }
  }
  return [...mt];
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
