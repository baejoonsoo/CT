const map = [1, 2, 4];
let c = 1 / 10;

// const solution = (n) => {
//   let answer = "";

//   while (n > 3) {
//     let temp = n % 3;

//     if (temp === 0) {
//       answer = "4" + answer;
//       n = Math.floor(n / 3 - 1);
//     } else {
//       answer = temp + answer;
//       n = Math.floor(n / 3);
//     }
//   }

//   answer = (n === 3 ? 4 : n) + answer;

//   return answer;
// };

const solution = (n) => {
  return n === 0
    ? ""
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(typeof solution(10));
