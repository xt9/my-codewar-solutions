// https://www.codewars.com/kata/snail

snail = function(array) {
  let moves = [];
  let foundCenter = false;
  if(array.length === 0 || array[0].length === 0) {
    return moves;
  } else if(array.length === 1) {
    return array[0];
  }
  
  // add functionality to check for visits on array elements
  let a = array.map(row => row.map(val => ({ val, visited: false }) ));
  // our snail starts at 0,0. So mark it as visited and add the move to moves
  a[0][0].visited = true;
  moves.push(a[0][0].val);
  
  let pos = [0, 0];
  let direction = 'R';
  
  // flow R -> D -> L -> U, repeat until all elements
  // are visited
  while(!foundCenter) {
    if(visitedAllSquares(a)) {
      break;
    }
    
    let move;
    switch(direction) {
      case 'R': move = moveHorizontal(pos, a, false); direction = 'D'; break;
      case 'D': move = moveDown(pos, a); direction = 'L'; break;
      case 'L': move = moveHorizontal(pos, a, true); direction = 'U'; break;
      case 'U': move = moveUp(pos, a); direction = 'R'; break;
    }
    // update the snails position
    pos = move.newPos;
    // add the visited squares to our move history
    move.visited.forEach(visited => {
      moves.push(visited.val);
    });
  }
  
  return moves.map(val => val);
}


function moveUp(pos, grid) {
    let squaresToVisit = [];
    // visits unvisited squares on the Y axis, going from the bottom to the top
    for(let row = pos[0]; row > 0; row--) {
      if(!grid[row][pos[1]].visited) {
        squaresToVisit.push(grid[row][pos[1]]);
      }
    }
    squaresToVisit.forEach(square => square.visited = true);
    return { newPos: [pos[0] - squaresToVisit.length, pos[1]], visited: squaresToVisit };
}

function moveDown(pos, grid) {
    let squaresToVisit = [];
    // visits unvisited squares on the Y axis, going from the top to the bottom
    for(let row = pos[0]; row < grid.length; row++) {
      if(!grid[row][pos[1]].visited) {
        squaresToVisit.push(grid[row][pos[1]]);
      }
    }
    squaresToVisit.forEach(square => square.visited = true);
    return { newPos: [pos[0] + squaresToVisit.length, pos[1]], visited: squaresToVisit };
}

function moveHorizontal(pos, grid, reverseOrder) {
  let squaresToVisit = grid[pos[0]].filter(square => !square.visited);
  squaresToVisit.forEach(square => square.visited = true);
  let newPos = reverseOrder ? [pos[0], pos[1] - squaresToVisit.length] : [pos[0], pos[1] + squaresToVisit.length];
  return { 
    newPos: newPos, 
    visited: reverseOrder ? squaresToVisit.reverse() : squaresToVisit
  };
}

// Checks if all squares on the grid is visited
function visitedAllSquares(arr) {
  let numOfSquares = arr.reduce((total, row) => total + row.length, 0);
  let visitedSquares = arr.reduce((total, row) => total + row.filter(val => val.visited).length, 0);
  return numOfSquares === visitedSquares;
}