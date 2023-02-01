const RockPaperScissors = require("./rps");
const RandomGenerator = require("./randomRPS");
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
});
