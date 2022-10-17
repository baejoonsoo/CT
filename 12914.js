let nums = [1, 1, 2];
function solution(n) {
  if (nums[n]) return nums[n];
  return (nums[n] = solution(n - 1) + solution(n - 2)) % 1234567;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
