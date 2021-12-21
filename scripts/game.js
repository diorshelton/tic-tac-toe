class Game {
  constructor(playerOne, playerTwo) {
     this.playerOne = playerOne;
     this.playerTwo = playerTwo;
     this.totalTurns = 0;
     this.gameboard = ["","","","","","","","",""];
  };
  isAWinner() {
    if (
      this.gameboard[0] && this.gameboard[0] === this.gameboard[1] && this.gameboard[1] === this.gameboard[2] ||
      this.gameboard[3] && this.gameboard[3] === this.gameboard[4] && this.gameboard[4] === this.gameboard[5] || 
      this.gameboard[6] && this.gameboard[6] === this.gameboard[7] && this.gameboard[7] === this.gameboard[8] ||
      this.gameboard[0] && this.gameboard[0] === this.gameboard[3] && this.gameboard[3] === this.gameboard[6] ||
      this.gameboard[1] && this.gameboard[1] === this.gameboard[4] && this.gameboard[4] === this.gameboard[7] ||
      this.gameboard[2] && this.gameboard[2] === this.gameboard[5] && this.gameboard[5] === this.gameboard[8] ||
      this.gameboard[0] && this.gameboard[0] === this.gameboard[4] && this.gameboard[4] === this.gameboard[8] ||
      this.gameboard[2] && this.gameboard[2] === this.gameboard[4] && this.gameboard[4] === this.gameboard[6]) {
        return true;
      }
      else {
        return false;
      };
  };
  checkForWin() {
    let gameMessage = document.querySelector(".message-text");
    const isEven = ticTacToe.totalTurns % 2 === 0;
   
    if (this.isAWinner()) {
      gameMessage.innerText = `${isEven ? this.playerOne.token : this.playerTwo.token} won`;
    return;
    }
    gameMessage.innerText = `It's ${isEven ? this.playerTwo.token : this.playerOne.token}'s turn`
    this.totalTurns ++;
  };
  takeTurn(Player, location) {
    if (this.gameboard[location]) {
      return
    }
    this.gameboard[location] = Player.token;
    let square = document.getElementById(location);
     square.innerText = Player.token;
    this.checkForWin();
  }
  resetGame() {
  }
  isADraw() {
    // Check board for a draw condition
  }
};
 