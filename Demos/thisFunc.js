function hasThis(secret) {
  console.log("From hasThis", this);

  this.blab = function () {
    return "My secret is:" + secret
  };
}
// hasThis()

const noThis = () => {
  console.log("From noThis", this);
};
// noThis();






let noOneKnows = new hasThis("deep and dark");
let everyoneKnows = new hasThis("hard work");

console.log(noOneKnows.blab())
console.log(everyoneKnows.blab())
