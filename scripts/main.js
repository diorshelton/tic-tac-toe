let gameBoard = document.querySelector(".grid");
let gameMessages = document.querySelector(".message-text");
let exWinTally = document.querySelector(".ex-player-wins");
let ohWinTally = document.querySelector(".oh-player-wins");
let exPlayer = new Player('ex', '❌');
let ohPlayer = new Player('oh', '⭕️');
let ticTacToe = new Game (exPlayer, ohPlayer);
let ohWins = document.querySelector(".oh-player-wins");
let exWins = document.querySelector(".ex-player-wins");
exWins.innerText = ohPlayer.wins;
ohWins.innerText = exPlayer.wins;

// Event Listeners
gameBoard.addEventListener("click", placeToken);

function placeToken(e) {
  if (e.target.innerText === "") {
    const isEven = ticTacToe.totalTurns % 2 === 0;
    ticTacToe.takeTurn(isEven ? exPlayer : ohPlayer, e.target.id)
  };
};
