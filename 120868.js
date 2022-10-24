function solution(sides) {
  return sides[0] + sides[1] - Math.abs(sides[0] - sides[1]) - 1;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
