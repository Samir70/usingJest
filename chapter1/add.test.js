const add = require("./add")
describe("add", () => {
    it("adds 4 and 5", () => {
        expect(add(4, 5)).toBe(9)
    })
})