class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

class UserBase {
  constructor(arrOfNames) {
    this.users = arrOfNames;
  }
  count() {
    return this.users.length;
  }
  getNames() {
    return this.users.map((u) => u.getName());
  }
  getIntroductions() {
    return this.users.map((u) => u.getIntroduction());
  }
  purge() {
    let userToDrop = this.users.pop()
    return `Got rid of ${userToDrop.getName()}`
  }
}
