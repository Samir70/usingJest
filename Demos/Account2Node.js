const Account = require("./bankBalance.js");
let account = new Account("Samir", "secret!", 10000);
account.getName()
// 'Samir'
account.getBalance("hello"); 
// 'You are not authorised to know that'
account.getBalance("secret!")
// '£10000'

