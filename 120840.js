const fibo = (n) => {
  if (n < 3) return BigInt(n);
  return BigInt(n) * BigInt(fibo(n - 1));
};

function solution(balls, share) {
  return Number(fibo(balls) / (fibo(balls - share) * fibo(share)));
}

console.log(solution(3, 2));
console.log(solution(5, 3));
