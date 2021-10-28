class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins =  [];
    this.gameboardSpaces =[];
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
