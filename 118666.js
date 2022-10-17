let maps = {
  R: 0,
  T: 0,
  C: 0,
  F: 0,
  J: 0,
  M: 0,
  A: 0,
  N: 0,
};

function solution(survey, choices) {
  let mbti = "";
  survey.forEach((elem, i) => {
    const choiNum = choices[i];

    if (choiNum < 4) {
      maps[elem[0]] += Math.abs(4 - choiNum);
    } else if (choiNum > 4) {
      maps[elem[1]] += Math.abs(4 - choiNum);
    }
  });

  mbti += maps.R >= maps.T ? "R" : "T";
  mbti += maps.C >= maps.F ? "C" : "F";
  mbti += maps.J >= maps.M ? "J" : "M";
  mbti += maps.A >= maps.N ? "A" : "N";

  return mbti;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
