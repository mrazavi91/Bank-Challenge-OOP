
import Money from "./Money.js";

class Account{
    #statement;
    #balance;
    #currentBalance;
    #date;
    constructor(balance=[],statement=[],currentBalance=[],date=[]) {
        this.#statement = statement
        this.#balance = balance
        this.#currentBalance = currentBalance
        this.#date = date;
    }
    //just for test used 
    getStatement() {
        return this.#statement
    }
    
    //adding money
    deposit = (money) => {
        if (money instanceof Money) {
            this.#statement.push(money)
            this.#balance.push(money.getAmount())
            this.#date.push(money.getDate())
        }
    }
    //getting balance at each stage
    getCurrentBalance() {
        return this.#currentBalance
    }
    //getting the amounts after each widthdraw and 
    getBalanceArray() {
        return this.#balance
    }
    
    //balance in total
    getBalance() {
        const accountBalance = this.#balance.reduce((accumulator, currentValue) => {
            this.#currentBalance.push(accumulator + currentValue)
            return accumulator + currentValue
        }, 0)
        return accountBalance
    }

    //removing money    
    withdraw = (money) => {
        if (money instanceof Money) {
            this.#statement.push(money)
            this.#balance.push(money.getAmount() * -1)
            this.#date.push(money.getDate())
        } 
    }
    //getting the date 
    getDateArray() {
        return this.#date
    }

}

export default Account