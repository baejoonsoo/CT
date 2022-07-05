function solution(number) {
  let count = 0;

  while (true) {
    if (number === 1) {
      return count;
    }
    if (count === 500) {
      return -1;
    }

    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
    count++;
  }
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
