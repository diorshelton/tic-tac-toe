class Game {
  constructor(playerOne, playerTwo) {
     this.playerOne = playerOne;
     this.playerTwo = playerTwo;
     this.gameBoard = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
     this.totalTurns = 0;
  };
  checkForWin() {

  }

  startGame(Player) {
    
  }

  takeTurn(Player) {
    let turnBanner = document.querySelector('.player-turn')
    turnBanner.innerText = Player.token;
    document.querySelector('.grid').addEventListener('click', function() {
      let space = event.target;
      let box = event.target.id;
      if (space.innerText !='') {
        alert("Space already taken")
      } else {
        space.innerText = Player.token;
        // push box to array
        Player.gameboardspaces.push()
      }
    })
  }

  resetGame() {

  }
};
