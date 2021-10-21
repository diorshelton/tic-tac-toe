class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins =  [];
  }
  saveWinsToStorage() {
    let stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem('playerWins', stringifiedWins);
  }
  retrieveWinsFromStorage() {
    let retrievedWins = JSON.parse(localStorage.getItem('playerWins'));
    return retrievedWins;
  };
}

let exPlayer = new Player("x", "❌");
let ohPlayer = new Player("o", "⭕️");