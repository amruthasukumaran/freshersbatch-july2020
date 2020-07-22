class BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;  
        this.accountBalance=accountBalance;
    }
     withdraw(amount) {
        return this.accountBalance-amount;
    }
    getCurrentBalance(){
       return this.accountBalance;
    } 
}

class Savings extends BankAccount{
  constructor(accountNumber,accountHolderName,accountBalance,isSalary){
      super(accountNumber,accountHolderName,accountBalance);
      this.isSalary=isSalary;
  }
}


class Current extends BankAccount{
   constructor(accountNumber,accountHolderName,accountBalance,odLimit){
       super(accountNumber,accountHolderName,accountBalance);
       this.odLimit=odLimit;
   }
}

acc1= new Savings(83637489,"Amrutha",435687.67,56777);
acc2= new Current(545687,"Akshay",356575.65,65887);


console.log(acc1);

console.log(acc1.withdraw(1000));
console.log(acc2.withdraw(2000));

console.log(acc1.getCurrentBalance());
console.log(acc2.getCurrentBalance());