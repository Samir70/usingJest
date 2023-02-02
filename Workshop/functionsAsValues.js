// first go at guessMyNumber
// This is an immediately invoked function expression (IIFE)
// It is anonymous since it has no name. The only way to call it is to call it immediately
// To run this in the console, I would have to copy and paste it in full each time I wanted to run it.
// If I try to run it in the terminal, I will see nothing. Even though a value is returned, 
//    nothing is done with that return value.
(function(guess) {
    if (guess < 25) {return "Too low"}
    if (guess > 25) {return "Too high"}
    if (guess === 25) {return "That's it!!!!!!!!"}
    return "Was that even a number?"
})(4)

// compare the above to defining a named function.
function guessMyNumber(guess) {
    if (guess < 25) {return "Too low"}
    if (guess > 25) {return "Too high"}
    if (guess === 25) {return "That's it!!!!!!!!"}
    return "Was that even a number?"
}

// Slightly more similar to the anonymous function is assigning a function to a variable
const guessMyNumber2 = function(guess) {
    if (guess < 25) {return "Too low"}
    if (guess > 25) {return "Too high"}
    if (guess === 25) {return "That's it!!!!!!!!"}
    return "Was that even a number?"
}
// We can also use an arrow function 
// (though there are some very subtle difference in the result)
const guessMyNumber3 = (guess) => {
    if (guess < 25) { return "Too low"} 
    if (guess > 25) { return "Too high"} 
    if (guess === 25) { return "That's it!!!!!!!!"} 
    return "Was that even a number?"
}

// But notice how limited these functions are. The number to guess is hardwired into them!
// If only there was an easy way to make functions with a number to guess.
// All this copy and pasting has tired me out.
// Automate the process. I need a factory to make functions. 
// Why not use what I had at the start and return it from a factory?

function funcFactory() {
    return (function(guess) {
        if (guess < 25) {return "Too low"}
        if (guess > 25) {return "Too high"}
        if (guess === 25) {return "That's it!!!!!!!!"}
        return "Was that even a number?"
    })
}

const guessMyNumber4 = funcFactory()

// But now, I can go even further
function funcFactory2(number) {
    return (function(guess) {
        if (guess < number) {return "Too low"}
        if (guess > number) {return "Too high"}
        if (guess === number) {return "That's it!!!!!!!!"}
        return "Was that even a number?"
    })
}
const guessMyNumber5 = funcFactory2(45)


// And finally!!!!
function ultimateFuncFactory() {
    let number = Math.floor(Math.random() *100) + 10
    return (function(guess) {
        if (guess < number) {return "Too low"}
        if (guess > number) {return "Too high"}
        if (guess === number) {return "That's it!!!!!!!!"}
        return "Was that even a number?"
    })
}
const guessMyNumber6 = ultimateFuncFactory()