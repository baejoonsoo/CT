function solution(dartResult) {
  let index = 0;
  let a = [0, 0, 0, 0];
  let size = dartResult.length;

  for (let i = 0; i < size; i++) {
    const cur = dartResult[i];

    if (cur === "S" || cur === "D" || cur === "T") {
      const powNum = cur === "S" ? 1 : cur === "D" ? 2 : 3;
      a[index] = Math.pow(a[index], powNum);
    } else if (cur === "*") {
      let start_idx = index == 1 ? 1 : index - 1;

      for (let j = start_idx; j <= index; j++) {
        a[j] = a[j] * 2;
      }
    } else if (cur === "#") {
      a[index] = a[index] * -1;
    } else {
      let num = parseInt(cur);

      if (i < size - 1 && num === 1 && dartResult[i + 1] === "0") {
        num = 10;
      }

      index++;

      a[index] = num;
      if (num == 10) i += 1;
    }
  }

  return a.reduce((acc, cur) => acc + cur);
}
