//addIncome: in going to take the account to manipulate and to take the amount of income to add
//reset account: will reset the expenses and income to account to change. needs to know which account to change
//get account summary will print account summary.

let myAccount = {
  name: "Omar Vega",
  expenses: 0,
  income: 0
};

//addIncome:
let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

//add expense
let addExpenses = function(account, amount) {
  account.expenses = account.expenses + amount;
};

//account summary
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return ` Account for ${account.name} has $${balance}. $${account.income} is the income for the account`;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 2.5);
addExpenses(myAccount, 500);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
console.log(myAccount);

// add expense
//add expense another
//getAccountSummary
//resetAccount
//getAccountSummary
