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
  gameStatus() {
    // updates gameMessages to match game state
    const isEven = ticTacToe.totalTurns % 2 === 0;
    if (this.isAWinner()) {
      gameMessages.innerText = `${isEven ? this.playerTwo.token : this.playerOne.token} won`;
    return;
    } else if (this.isADraw()) {
      gameMessages.innerText = "DRAW !"
    } else {
      gameMessages.innerText = `It's ${isEven ? this.playerOne.token : this.playerTwo.token}'s turn`;
      
    }
  }
  takeTurn(Player, location) {
    if (this.gameboard[location]) {
      return;
    }
    this.gameboard[location] = Player.token;
    let square = document.getElementById(location);
    square.innerText = Player.token;
    this.totalTurns++;
    this.gameStatus();
   }
  isADraw() {
    if (this.totalTurns === 9 && this.isAWinner() === false) {
      // gameMessages.innerText = "DRAW !"
      return true;
    }
  }
  resetGame() {
  }
  
};