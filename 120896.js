function solution(s) {
  let mt = {};

  [...s].forEach((c) => {
    if (mt[c]) {
      mt[c] += 1;
    } else {
      mt[c] = 1;
    }
  });

  return Object.keys(mt)
    .filter((k) => mt[k] === 1)
    .sort()
    .join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
