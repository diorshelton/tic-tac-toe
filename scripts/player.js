class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage() {
    let stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(this.id, stringifiedWins);
  }
  retrieveWins() {
    let retrievedWins = JSON.parse(localStorage.getItem(this.id));
    return retrievedWins;
  };
}