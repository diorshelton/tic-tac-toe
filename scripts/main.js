let gameBoard = document.querySelector('.grid');
let gameMessages = document.querySelector('.message-text');
let exWinTally = document.querySelector(".ex-player-wins")
let ohWinTally = document.querySelector(".oh-player-wins");
let exPlayer = new Player('ex', '❌');
let ohPlayer = new Player('oh', '⭕️');
let ticTacToe = new Game (exPlayer, ohPlayer);

// Event Listeners

gameBoard.addEventListener("click", selectBox);

function selectBox(e) {
  if (e.target.innerText === "") {
    const isEven = ticTacToe.totalTurns % 2 === 0;
    ticTacToe.takeTurn(isEven ? exPlayer : ohPlayer, e.target.id)
  }
}
