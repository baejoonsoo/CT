const strPush = (a) => {
  return [a[a.length - 1], ...a.slice(0, a.length - 1)].join("");
};

function solution(A, B) {
  let tempA = A;
  for (let i = 1; i < A.length; i++) {
    if (tempA === B) return i - 1;
    console.log(tempA, B);
    tempA = strPush(tempA);
  }
  return -1;
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
