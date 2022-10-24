function solution(dots) {
  dots = dots.sort((a, b) => a[0] - b[0]);
  return Math.abs(dots[0][0] - dots[2][0]) * Math.abs(dots[0][1] - dots[1][1]);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
