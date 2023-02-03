function Account(name, password, openingBalance) {
  let balance = openingBalance;
  return {
    getName: function () {
      return name;
    },
    getBalance: function (pw) {
      if (pw !== password) {
        return "You are not authorised to know that";
      } else {
        return `£${balance}`;
      }
    },
    invest: function (money) {
      balance += money;
      return `£${money} invested in the account`;
    },
  };
}

class Account2 {
  #password;
  #balance
  constructor(name, password, openingBalance) {
    this.#password = password;
    this.name = name;
    this.#balance = openingBalance;
  }
  getName() {
    return this.name;
  }
  getBalance(pw) {
    if (pw !== this.#password) {
      return "You are not authorised to know that";
    } else {
      return `£${this.#balance}`;
    }
  }
  invest(money) {
    this.#balance += money;
    return `£${money} invested in the account`;
  }
}

module.exports = {Account, Account2};
