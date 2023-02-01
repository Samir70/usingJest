// Returns a random move from the array ['rock', 'paper', 'scissors']
class RandomGenerator {
  getMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);

    return moves[randomIndex];
  }
}

module.exports = RandomGenerator;
