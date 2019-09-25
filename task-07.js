const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let id = 0;
function sendMessage(str) {
  alert(str);
}
const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.addTransaction({
      id: id += 1,
      type: Transaction.DEPOSIT,
      amount,
    });
    return amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      sendMessage('Cнятие такой суммы не возможно, недостаточно средств');
      return false;
    }
    this.balance -= amount;
    this.addTransaction({
      id: id += 1,
      type: Transaction.WITHDRAW,
      amount,
    });
    return amount;
  },
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(ix) {
    const identificator = ix;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const element = this.transactions[i];
      if (element.id === identificator) {
        return element;
      }
    }
    return undefined;
  },
  getTransactionTotal(type) {
    const deposits = [];
    for (let index = 0; index < this.transactions.length; index += 1) {
      const element = this.transactions[index];
      if (element.type === type) {
        deposits.push(element);
      }
    }
    let total = 0;
    for (let i = 0; i < deposits.length; i += 1) {
      const element = deposits[i];
      total += element.amount;
    }
    return total;
  },
};

console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.balance);
