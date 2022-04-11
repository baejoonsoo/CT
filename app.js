var solution = (participant, completion) => {
  completion.map((name) => {
    console.log(completion);
    return (completion[name] = (completion[name] | 0) + 1);
  });
  return participant.find((name) => !completion[name]--);
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
