function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + (common[1] - common[0]);
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
