import Account from "../src/Account.js"
import Money from "../src/Money.js"
import Table from "../src/Table.js"

describe('table test ', () => { 
    it('should first', () => { 
        const account = new Account()

        const money = new Money(1000, '10/01/2012')
        const money1 = new Money(2000, '13/01/2012')
        const money2 = new Money(500, '14/01/2012')
        
        //Act
        //act 1.1
        account.deposit(money)
        account.deposit(money1)
        account.withdraw(money2)
        account.getBalance()

        const print = new Table(account.getCurrentBalance(), account.getBalanceArray(), account.getDateArray())

        // console.log(account.getDateArray())
        //Assert
        const result = print.printTable()
        console.log(result)
        expect(result).toBe('date       || credit  || debit  || balance\n14/01/2012 ||         || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||        || 3000.00\n10/01/2012 || 1000.00 ||        || 1000.00')


    })
})