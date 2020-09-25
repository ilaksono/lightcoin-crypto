class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction)
  }
  get balance() {
    return this.transactions.reduce((a, val) => a + val.value, 0);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account
  }
  commit() {
    if (-this.value <= this.account.balance) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
    }
    return false;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return this.amount * -1;
  }
}
class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Balance: ', myAccount.balance);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);
console.log('Balance: ', myAccount.balance);



let t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('Transaction 3: ', t3);
console.log(`Balance: ${myAccount.balance}`);


console.log(myAccount.balance);
// console.log(myAccount.transactions);