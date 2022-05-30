const solution = (s) => {
  let sets = s
    .slice(2, -2)
    .split("},{")
    .map((set) => set.split(",").map((num) => parseInt(num)))
    .sort((a, b) => {
      const an = a.length;
      const bn = b.length;

      if (an > bn) {
        return 1;
      } else {
        return -1;
      }
    });

  const set = new Set();

  sets.forEach((num) => num.forEach((oneN) => set.add(oneN)));

  return [...set];
};

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}", [2, 1, 3, 4]));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}", [2, 1, 3, 4]));
console.log(solution("{{20,111},{111}}", [111, 20]));
console.log(solution("{{123}}", [123]));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}", [3, 2, 4, 1]));
