function solution(keyinput, board) {
  const xSize = (board[0] - 1) / 2;
  const ySize = (board[1] - 1) / 2;
  let location = [0, 0];

  keyinput.forEach((key) => {
    if (key === "left" && location[0] > -xSize) location[0]--;
    else if (key === "right" && location[0] < xSize) location[0]++;
    else if (key === "up" && location[1] < ySize) location[1]++;
    else if (key === "down" && location[1] > -ySize) location[1]--;
  });

  return location;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
