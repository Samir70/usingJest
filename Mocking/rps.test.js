const RockPaperScissors = require("./rps");
const RandomGenerator = require("./randomRPS");
const readline = require("node:readline/promises");
jest.mock("./randomRPS");

describe("RockPaperScissors", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    RandomGenerator.mockClear();
  });

  it("wins the game", () => {
    // 1. We use the normal constructor - Jest will take care of creating a mock.
    const mockRandomGenerator = new RandomGenerator();

    // 2. We mock the method getMove, replacing its normal implementation
    // with a custom function (which here simply returns 'paper').
    mockRandomGenerator.getMove.mockImplementation(() => "paper");

    // 3. The rest is the same as when using the previous technique.
    const game = new RockPaperScissors(mockRandomGenerator);

    expect(game.getResult("scissors")).toBe(
      "You picked scissors, I picked paper. You Loose!"
    );
  });

  it("asks a player for a move", async () => {
    const mockRandomGenerator = new RandomGenerator();
    mockRandomGenerator.getMove.mockImplementation(() => "paper");
    
    jest.spyOn(readline, 'createInterface').mockImplementationOnce(() => {
        return {question: () => "Scissors", close: () => null}
      })
    const game = new RockPaperScissors(mockRandomGenerator);
    let playerMove = await game.getPlayerMove();
    expect(playerMove).toBe("scissors");

    expect(game.getResult(playerMove)).toBe(
        "You picked scissors, I picked paper. You Loose!"
      );
  });
});
