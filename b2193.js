function solution(n) {
  let arr = [
    ...Array(n + 1)
      .fill(0)
      .map(() =>
        Array(2)
          .fill(0)
          .map(() => 0)
      ),
  ];
  arr[1][0] = 0;
  arr[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i][0] = arr[i - 1][0] + arr[i - 1][1];
    arr[i][1] = arr[i - 1][0];
  }

  return arr[n][0] + arr[n][1];
}

console.log(solution(3));
