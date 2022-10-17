const solution = (n) =>
  Array(n)
    .fill(0)
    .reduce(
      (a, _, i) => a + (n % (i + 1) === 0 && (i + 1) % 2 === 1 ? 1 : 0),
      0
    );

// def solution(n):
//     answer = 0

//     for i in range(1, n + 1):
//         if n % i == 0:
//             if i % 2 == 1:
//                 answer += 1

//     return answer

console.log(solution(15));
