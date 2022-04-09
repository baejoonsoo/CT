function solution(s, n) {
  const temp = s.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return temp;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
console.log(solution(["ae", "be", "ce", "ae"], 1));
console.log(solution(["zbcde", "ybcdf", "xbcdg"], 1));
