const numStr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  numStr.forEach((num, index) => {
    const arr = s.split(num);
    s = arr.join(index);
  });

  return Number(s);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
console.log(solution("11zerozero323"));
