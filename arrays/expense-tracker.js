const account = {
  name: "Omar Vega",
  expenses: [],
  addExpense: (description, amount) => {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: () => {
    let totalExpenses = 0;

    this.expenses.forEach(expense => {
      totalExpenses = expense + expense.amount;
    });

    return `${this.name} and ${this.amount}`;
  }
};

//expenses -> description, amount
//addExpenses -> descrition, amount
//getAccount summary -> total of expenses ex. omar vega has $.00 in expenses

account.addExpense("Rent", 950);
account.addExpense("Coffee", 250);

// console.log(account.expenses);
console.log(account.getAccountSummary());
