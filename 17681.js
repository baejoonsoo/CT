// function solution(n, arr1, arr2) {
//   const arr1Bit = arr1.map((num) => num.toString(2).padStart(n, "0"));
//   const arr2Bit = arr2.map((num) => num.toString(2).padStart(n, "0"));
//   const res = [];
//   for (let i = 0; i < n; i++) {
//     let tempArr = "";
//     for (let k = 0; k < n; k++) {
//       tempArr += arr1Bit[i][k] !== "0" || arr2Bit[i][k] !== "0" ? "#" : " ";
//     }
//     res.push(tempArr);
//   }
//   return res;
// }

const solution = (n, arr1, arr2) => {
  return arr1
    .map((i, index) =>
      // 비트 or 연산자로 2진수 단위로 or 한 문자열 앞에 n에서 부족한 만큼 0을 붙혀준다
      (i | arr2[index]).toString(2).padStart(n, "0")
    )
    .map((i) => i.replace(/0/g, " ").replace(/1/g, "#")); // 정규식을 사용하여 문자열 속 모든 "0"과 "1"을 각각 " "와 "#"으로 변경한다
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
