const solution = (genres, plays) => {
  let hash = {};

  genres.forEach((genre, i) => {
    if (hash[genre]) {
      hash[genre] = [...hash[genre], { index: i, play: plays[i] }];
    } else {
      hash[genre] = [{ index: i, play: plays[i] }];
    }
  });

  const genreRank = Object.keys(hash).sort((a, b) => {
    const aSum = hash[a].reduce((acc, cur) => acc + cur.play, 0);
    const bSum = hash[b].reduce((acc, cur) => acc + cur.play, 0);
    if (aSum > bSum) {
      return -1;
    } else if (aSum === bSum) {
      return 0;
    } else {
      return 1;
    }
  });

  return genreRank
    .reduce(
      (acc, cur) => [
        ...acc,
        ...hash[cur]
          .sort((a, b) => {
            if (a.play > b.play) {
              return -1;
            } else if (a.play === b.play) {
              return 0;
            } else {
              return 1;
            }
          })
          .slice(0, 2),
      ],
      []
    )
    .map((obj) => obj.index);
};

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
