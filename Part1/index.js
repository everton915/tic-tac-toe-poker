const board = [];

function play(clickedId){
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);


  if (playerSpan.innerText === 'x') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);
}

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

// CHECK ALL WINNING COMBINATIONS //
if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
  window.alert(`${topLeft} is the winner!`);
  return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
  window.alert(`${middleLeft} is the winner!`);
  return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
  window.alert(`${bottomLeft} is the winner!`);
  return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
  window.alert(`${topLeft} is the winner!`);
  return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
  window.alert(`${topCenter} is the winner!`);
  return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
  window.alert(`${topRight} is the winner!`);
  return;
}
if (topleft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
  window.alert(`${topLeft} is the winner!`);
  return;
}
if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
  window.alert(`${bottomLeft} is the winner!`);
  return;
}

// DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS //
let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  window.alert("Cat's game, there is no winner!");
}


