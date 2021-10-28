let startButton = document.getElementById('start');
let gameBoard = document.querySelector('.grid');

class Box {
  constructor(x, y) {
    this.location = {x,y};
    this.isSelected = false;
    this.selectedBy = '';
  };
};

let box1 = new Box(-1,1);
let box2 = new Box(0, 1);
let box3 = new Box(1, 1);
let box4 = new Box(-1,0);
let box5 = new Box(0, 0);
let box6 = new Box(1, 0);
let box7 = new Box(-1,-1);
let box8 = new Box(0, -1);
let box9 = new Box(1, -1);

startButton.addEventListener('click', function() {
  console.log(ticTacToe)
});

function chooseRandomPlayer() {
  let startingPlayer = Math.floor(Math.random()*players.length)
  return players[startingPlayer].id;
};

let exPlayer = new Player('ex', "❌");
let ohPlayer = new Player('oh', "⭕️");

let ticTacToe = new Game (exPlayer, ohPlayer);


// ticTacToe.takeTurn(ohPlayer)

function clickedBox(Player) {
  let space = event.target;
    if (space.innerText === '') {
      space.innerText = Player.token;
    }
};