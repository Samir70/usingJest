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

module.exports = Account;
