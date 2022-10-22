function solution(emergency) {
  const arr = [...emergency].sort((a, b) => b - a);
  console.log("test", arr, emergency);
  return emergency.map((e) => arr.indexOf(e) + 1);
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
