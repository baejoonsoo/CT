const fruits = "banana, melon, strawberry, orange";

const newFruits = fruits.replace(/(orange)/, (match, f1, offset, string) => {
  return `( ${string} )`;
});

console.log(`${newFruits}`);
