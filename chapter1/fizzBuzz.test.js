const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
    it("returns fizz for numbers divisible by 3, but not 5", () => {
        expect(fizzBuzz(3)).toBe("Fizz")
        expect(fizzBuzz(21)).toBe("Fizz")
        expect(fizzBuzz(39)).toBe("Fizz")
        expect(fizzBuzz(72)).toBe("Fizz")
    })
    it("returns buzz for numbers divisible by 5 but not 3", () => {
        expect(fizzBuzz(5)).toBe("Buzz")
        expect(fizzBuzz(25)).toBe("Buzz")
    })
    it("returns fizzBuss for numbers divisible by 5 and 3", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
        expect(fizzBuzz(0)).toBe("FizzBuzz")
    })
    it("returns the number if it is coprime to 5 and 3", () => {
        expect(fizzBuzz(8)).toBe(8)
        expect(fizzBuzz(29)).toBe(29)
    })
})