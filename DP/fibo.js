const fibo = (n) => {
  if (n === 0) return 0;
  if (n < 3) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(3));
console.log(fibo(5));
console.log(fibo(30));
console.log(fibo(300));
