function solution(s) {
  let count = [0, 0];
  while (s !== "1") {
    count[0]++;
    count[1] += s.split("0").length - 1;
    s = (s.split("1").length - 1).toString(2);
  }
  return count;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
