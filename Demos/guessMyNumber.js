const guessMyNumber = function(n) {
    this.guess = function (g) {
        if (g < n) {return "Too low"}
        if (g > n) {return "Too high"}
        if (g === n) {return "That's it!!!!!!!!"}
        return "Was that even a number?"
    }
}

class GuessMyLetter{
    constructor(letter) {
        this.letter = letter
    }
    guess(g) {
        if (g < this.letter) {return "That's too early in the alphabet"}
        if (g > this.letter) {return "That's too late in the alphabet"}
        if (g === this.letter) {return "That's it!!!!!!!!"}
    }
}

module.exports = guessMyNumber

/**
 * const guessMyNumber = require("./Demos/guessMyNumber.js")
 * let secret = new guessMyNumber(55)
 * secret.guess(4)
 * etc
 */