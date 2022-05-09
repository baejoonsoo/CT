const solution = (s) =>
  s
    .toLowerCase()
    .split(" ")
    .map((str) => (str ? str[0].toUpperCase() + str.slice(1) : ""))
    .join(" ");

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("a a a a a a a a a a"));
console.log(solution("a    a     a"));
