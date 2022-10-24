let sum = 0;

const f = (n) => {
  if (n < 10) return;
  const newCoupon = Math.trunc(n / 10);

  sum += newCoupon;

  f((n % 10) + newCoupon);
};

function solution(chicken) {
  f(chicken);
  return sum;
}

console.log(solution(100));
console.log(solution(1081));
