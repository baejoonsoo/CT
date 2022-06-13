let memo = [0, 1, 1];

const topDownFibo = (n) => {
  if (memo[n]) return memo[n];
  return (memo[n] = topDownFibo(n - 1) + topDownFibo(n - 2));
};

console.log(topDownFibo(3));
console.log(topDownFibo(5));
console.log(topDownFibo(30));
console.log(topDownFibo(300));
console.log(topDownFibo(1000));
