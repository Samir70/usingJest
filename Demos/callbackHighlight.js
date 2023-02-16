function countToTen() {
  let out = [];
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    out.push(i);
  }
  return out;
}

function highlight(callback) {
  console.log("*******Console Logs of", callback, "********");
  console.log("------start-----");
  const results = callback();
  console.log("------end-------");
  console.log("*******Output of", callback, "********");
  console.log("------start-----");
  console.log(results);
  console.log("------end-------");
}

highlight(countToTen);
