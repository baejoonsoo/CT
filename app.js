function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) arr.push(i);

  for (let i = 1; i * i < n; i++) {
    if (arr[i]) {
      const num = arr[i];
      for (let k = num * num; k <= n; k += num) {
        arr[k - 1] = 0;
      }
    }
  }

  const answer = arr.filter((number) => number);
  answer.shift();

  return answer.length;
}

console.log(solution(10));
console.log(solution(5));
