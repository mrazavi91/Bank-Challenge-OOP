// import chalk from 'chalk';
class Table{

    #credit;
    #debit;
    #date;
    #balance;
    #creditDebit;

    constructor(balance = [], creditDebit =[],date = [], credit = [], debit = []) {
        this.#date = date
        this.#credit = credit
        this.#debit = debit
        this.#balance = balance
        this.#creditDebit =  creditDebit
    }

    //balance
    printBalance(balance) {
        const NewBalance = balance.map(element => element.toFixed(2))
        this.#balance = NewBalance.reverse()
    }
    
    //credit and debit
    printCreditDebit(money) {
        money.forEach(element => {
            if (element > 0) {
                this.#credit.unshift(element.toFixed(2))
                this.#debit.unshift('      ')
            } else {
                this.#debit.unshift(Math.abs(element).toFixed(2))
                this.#credit.unshift('       ')
            }
        });
    }
    //Date    
    printDate(date) {
       this.#date=  date.reverse()
    }
    //printing table 
    printTable () {
        this.printBalance(this.#balance); this.printCreditDebit(this.#creditDebit); this.printDate(this.#date); 
        const myArray = []
        for (let i = 0; i < this.#debit.length; i++) {
            //line 46 is printing the coloured version, it works but I commented out because I wanted to test the table that is asked us to print
            // const tableOut = `${this.#date[i]} || ${chalk.green(this.#credit[i])} || ${chalk.red(this.#debit[i])} || ${this.#balance[i]}`
            const tableOut = `${this.#date[i]} || ${this.#credit[i]} || ${this.#debit[i]} || ${this.#balance[i]}`
            myArray.push(tableOut)
        }
        return `date       || credit  || debit  || balance\n${myArray.join('\n')}`
    }

}
export default Table