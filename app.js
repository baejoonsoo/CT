const solution = (numbers) => {
  const answer = numbers
    .sort((a, b) => {
      return (
        parseInt(b.toString() + a.toString()) -
        parseInt(a.toString() + b.toString())
      );
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
};

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
