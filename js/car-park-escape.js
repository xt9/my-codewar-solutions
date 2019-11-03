// https://www.codewars.com/kata/591eab1d192fe0435e000014

function escape(carpark) {
  let moveHistory = [];
  // 2d position
  let currentPos = findStartPos(carpark);
  let foundExit = false;
  
  while(!foundExit) {
    let move;
    let isLastFloor = currentPos[0] === carpark.length - 1;
    // if we're on the last floor or if we're not on a ladder we make horizontal moves
    // if we are on a ladder we move vertically.
    if(isLastFloor || !isOnLadder(currentPos, carpark)) {
      // our targetX will either be the carpark exit or a ladder
      move = getHorizontalMove(isLastFloor ? carpark[currentPos[0]].length - 1 : findLadder(carpark[currentPos[0]]), currentPos);
    } else if(isOnLadder(currentPos, carpark)) {
      move = getVerticalMove(currentPos, carpark);
    }
    // update our current position
    currentPos = move.newPos;
    // update our history
    if(move.shorthand !== 'R0') {
      moveHistory.push(move.shorthand);
    }
  
    // if our position matches the exit we stop making moves
    if(isOnExit(currentPos, carpark)) {
      foundExit = true;
    }
  }
  return moveHistory;
}

function getVerticalMove(currentPos, carpark) {
    let steps = 1;
    // if multiple ladders connect, we can make more than one step
    for(let floor = currentPos[0]; floor < carpark.length; floor++) {
      if(carpark[floor+1] && carpark[floor+1][currentPos[1]] === 1) {
        steps += 1;
      } else {
        break;
      }
    }
    return { shorthand: 'D' + steps, newPos: [currentPos[0] + steps, currentPos[1]] };
}

function getHorizontalMove(targetX, startingPos) {
  let steps;
  // if our target X position is larger than our position
  // we're moving from R -> L
  if(targetX >= startingPos[1]) {
    steps = targetX - startingPos[1];
    return { shorthand: 'R' + steps, newPos: [startingPos[0], startingPos[1] + steps] };
  } else {
    steps = startingPos[1] - targetX;
    return { shorthand: 'L' + steps, newPos: [startingPos[0], startingPos[1] - steps] };
  }
}

function isOnExit(pos, carpark) {
  return pos[0] === carpark.length - 1 && pos[1] === carpark[pos[0]].length - 1;
}

function isOnLadder(pos, carpark) {
  return carpark[pos[0]][pos[1]] === 1;
}

function findLadder(floor) {
  let ladder = 0;
  floor.forEach((row, i) => {
    if(row === 1) {
      ladder = i;
    }
  });
  return ladder;
}

function findStartPos(carpark) {
  let startPos = [];
  carpark.forEach((floor, i) => {
    floor.forEach((row, j) => {
      if(row === 2) {
        startPos = [i, j];
      }
    });
  });
  return startPos;
}