function solution(n, lts) {
  let maxPri = [...Array(n + 1).fill(0)];

  for (let i = 1; i < n + 1; i++) {
    let temp = [...Array(i + 1).fill(0)];

    for (let k = i; k >= 0; k--) {
      temp[k] = maxPri[k - 1] + lts[n - k];
    }
    maxPri[i] = Math.max(...temp);
  }

  return maxPri;
}

console.log(solution(4, [1, 5, 6, 7]));
