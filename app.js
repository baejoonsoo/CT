// function solution(N, stages) {
//   let failRate = [];

//   for (let i = 0; i < N; i++) {
//     failRate.push({
//       stage: i + 1,
//       arrival: 0,
//       challenging: 0,
//       rate: 0,
//     });
//   }

//   stages.forEach((stage) => {
//     for (let i = 0; i < N; i++) {
//       if (stage >= i + 1) {
//         failRate[i].arrival++;
//       }
//       if (stage === i + 1) {
//         failRate[i].challenging++;
//       }
//     }
//   });

//   for (let i = 0; i < N; i++) {
//     failRate[i].rate = failRate[i].arrival // 아무도 스테이지에 도달하지 못했을 때(= 0알 때) 에러남
//       ? failRate[i].challenging / failRate[i].arrival
//       : 0;
//   }

//   return failRate
//     .sort((a, b) => {
//       if (a.rate <= b.rate) {
//         return 1;
//       } else {
//         return -1;
//       }
//     })
//     .map((obj) => obj.stage);
// }

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(5, [2]));
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(4, [1, 2, 3, 2, 1]));
