const bottomUpFibo = (n) => {
  let memo = [0, 1, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};

console.log(bottomUpFibo(3));
console.log(bottomUpFibo(5));
console.log(bottomUpFibo(30));
console.log(bottomUpFibo(300));
console.log(bottomUpFibo(1000));
