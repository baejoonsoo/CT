function solution(my_string) {
  const lst = my_string.split(" ");
  let sum = Number(lst[0]);

  for (let i = 1; i < lst.length; i++) {
    if (lst[i] === "+") sum += Number(lst[++i]);
    else if (lst[i] === "-") sum -= Number(lst[++i]);
  }
  return sum;
}

console.log(solution("3 + 4"));
console.log(solution("34 + 44 - 11"));
