const addNewBoard = (board) => {
  const newBoard = [];
  for (let i = 0; i < board[0].length; i++) {
    const temp = [];
    for (let k = 0; k < board.length; k++) {
      if (board[k][i]) temp.unshift(board[k][i]);
    }
    newBoard.push(temp);
  }

  return newBoard;
};

function solution(board, moves) {
  const newBoard = addNewBoard(board);
  let basket = [];
  let removeCount = 0;

  moves.forEach((move) => {
    if (newBoard[move - 1].length) {
      basket.push(newBoard[move - 1].pop());
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket = basket.slice(0, -2);
        removeCount++;
      }
    }
  });

  return removeCount * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
