const RandomGenerator = require("./randomRPS");

const readline = require("node:readline/promises");
// const { stdin: input, stdout: output } = require("node:process");

// Gets a player move as input and computes the result
// after comparing with the random move
class RockPaperScissors {
  constructor(randomGenerator) {
    this.randomGenerator = randomGenerator;
  }

  async getPlayerMove() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    let playerMove = await rl.question("Rock, Paper or Scissors? ");
    console.log("You chose", playerMove.toLowerCase());
    rl.close();
    return playerMove.toLowerCase();
  }

  getResult(playerMove) {
    const randomMove = this.randomGenerator.getMove();
    const result = `You picked ${playerMove}, I picked ${randomMove}. You Loose!`;
    return result;
  }
}

//   rps = new RockPaperScissors(RandomGenerator)
//   rps.getPlayerMove()

module.exports = RockPaperScissors;
