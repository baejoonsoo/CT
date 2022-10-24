function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const at = Math.abs(a - n);
    const bt = Math.abs(b - n);

    if (at > bt) return 1;
    if (at < bt) return -1;
    if (at === bt) return b - a;
  });
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
