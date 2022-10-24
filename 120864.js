function solution(my_string) {
  return my_string.split(/\D+/g).reduce((a, c) => a + Number(c), 0);
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
