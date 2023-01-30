const seconds = new Date().getTime() / 1000;

// setTimeout will add the passed function to the message queue after 500ms
// But, if another message gets put on the queue before then, that (those) message(s) will
// be run first
setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500)


// A codeblock like this counts as a message
// As would a DOM event with a listener, or a function call
while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
