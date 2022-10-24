function solution(id_pw, db) {
  const mt = {};
  db.forEach(([id, pw]) => (mt[id] = pw));
  const [id, pw] = id_pw;

  if (!mt[id]) return "fail";
  else if (mt[id] !== pw) return "wrong pw";
  else return "login";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);
console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
