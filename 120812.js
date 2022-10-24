function solution(array) {
  let mt = {};

  array.forEach((n) => {
    if (mt[n]) {
      mt[n]++;
    } else {
      mt[n] = 1;
    }
  });

  const maxKey = Math.max(...Object.values(mt));
  const a = Object.entries(mt).filter((n) => n[1] === maxKey);

  return a.length === 1 ? Number(a[0][0]) : -1;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
