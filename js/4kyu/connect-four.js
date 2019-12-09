// https://www.codewars.com/kata/56882731514ec3ec3d000009

let indexes = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6
};
  
// Distinct number aliases for easier table debugging
let colors = {
  red: 3,
  yellow: 7
};

function whoIsWinner(moves) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  const insertIntoRow = (column, color) => {
    // Scan from the bottom up for free positions
    for(let row = board.length - 1; row >= 0; row--) {
      if(board[row][column] === 0) {
        board[row][column] = color;
        return;
      }
    }
  };
  
  // After each move, check if either team has made a winning move
  for(let i = 0; i <= moves.length - 1; i++) {
    let [char, color] = moves[i].toLowerCase().split('_');
    insertIntoRow(indexes[char], colors[color]);
    
    let results = [];
    results.push(...getHorizontalWinners(board));
    results.push(...getVerticalWinners(board));
    results.push(...getDiagonalWinners(board));
  
    if(results.length > 0) {
      return results[0].color === colors.red ? "Red" : "Yellow";
    }
  }

  return "Draw";
}

// Get an array of horizontal sequences that are considered winning moves.
function getHorizontalWinners(board) {
  let results = [];
  
  for(let row = 0; row <= board.length - 1; row++) {
    for(let column = 0; column <= 3; column++) {
      if(board[row][column] === colors.red &&
        board[row][column+1] === colors.red &&
        board[row][column+2] === colors.red &&
        board[row][column+3] === colors.red
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.red });
      } else if(board[row][column] === colors.yellow &&
        board[row][column+1] === colors.yellow &&
        board[row][column+2] === colors.yellow &&
        board[row][column+3] === colors.yellow
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.yellow });
      }
    }
  }
  
  return results;
}

// Get an array of vertical sequences that are considered winning moves.
function getVerticalWinners(board) {
  let results = [];
  for(let row = 0; row <= 2; row++) {
    for(let column = 0; column <= board[row].length - 1; column++) {
      if(board[row][column] === colors.red &&
        board[row+1][column] === colors.red &&
        board[row+2][column] === colors.red &&
        board[row+3][column] === colors.red
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.red });
      } else if(board[row][column] === colors.yellow &&
        board[row+1][column] === colors.yellow &&
        board[row+2][column] === colors.yellow &&
        board[row+3][column] === colors.yellow
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.yellow });
      }
    }
  }
  
  return results;
}

// Get an array of diagonal sequences that are considered winning moves.
function getDiagonalWinners(board) {
  let results = [];
  
  // Left to right
  // We can start on the 2nd and go up since lower starting-points
  // can only get 3 in a row at the most
  for(let row = 2; row >= 0; row--) {
    for(let column = board[row].length - 1; column >= 3; column--) {
      if(board[row][column] === colors.red &&
        board[row+1][column-1] === colors.red &&
        board[row+2][column-2] === colors.red &&
        board[row+3][column-3] === colors.red
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.red });
      } else if(board[row][column] === colors.yellow &&
        board[row+1][column-1] === colors.yellow &&
        board[row+2][column-2] === colors.yellow &&
        board[row+3][column-3] === colors.yellow
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.yellow });
      }
    }
  }
  
  // Right to left
  for(let row = 2; row >= 0; row--) {
    for(let column = 0; column <= 3; column++) {
      if(board[row][column] === colors.red &&
        board[row+1][column+1] === colors.red &&
        board[row+2][column+2] === colors.red &&
        board[row+3][column+3] === colors.red
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.red });
      } else if(board[row][column] === colors.yellow &&
        board[row+1][column+1] === colors.yellow &&
        board[row+2][column+2] === colors.yellow &&
        board[row+3][column+3] === colors.yellow
      ) {
        results.push({ pos: { y: row, x: column }, color: colors.yellow });
      }
    }
  }
  
  return results;
}