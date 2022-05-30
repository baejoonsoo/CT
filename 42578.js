const solution = (clothes) => {
  let hash = {};

  clothes.forEach((clothe) => {
    const [_, key] = clothe;
    hash[key] = (hash[key] || 0) + 1;
  });

  return Object.keys(hash).reduce((acc, cur) => acc * (hash[cur] + 1), 1) - 1;
};

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
