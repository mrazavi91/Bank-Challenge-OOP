import Account from "../src/Account.js"
import Money from "../src/Money.js"

describe('Deposit Test', () => { 
    let account, money, money1

    beforeEach(() => {
        account = new Account()
        money = new Money(1000)
        money1 = new Money(500)
    });

    afterEach(() => {
        account = undefined;
        money = undefined;
        money1 = undefined;
    });

    describe('Deposit only Money', () => { 
        it('should only adding money to the account with no amount', () => { 
            //Act
            account.deposit(money)
            //Assert 
            expect(account.getStatement().length).toBe(1)
        })

        it('should only adding money to the account with amount', () => {
            //Act
            account.deposit(money)
            //Assert 
            expect(account.getBalance()).toBe(1000)
        })
        
    })
    
        it('should test only remove money and check balance', () => { 
            //Act
            account.deposit(money)
            account.withdraw(money1)
            //Assert 
            expect(account.getBalance()).toBe(500)
        })
    
    
    describe('deposit and withdraw at specific dates', () => { 
        let account , money , money1 , money2

        beforeEach(() => {
            account = new Account()
            money = new Money(1000, '10/01/2012')
            money1 = new Money(2000, '13/01/2012')
            money2 = new Money(500, '14/01/2012')
        });

        afterEach(() => {
            account = undefined;
            money = undefined;
            money1 = undefined;
            money2 = undefined;
        });


        it('should deposit at 10/01/2012', () => { 
            //Act
            account.deposit(money)
            //Assert 
            expect(account.getBalance()).toBe(1000)
        })
        
        it('should deposit on 10/01/2012, 13/01/2012 and withdraw on 14/01/2012', () => {
            //Act
            account.deposit(money)
            account.deposit(money1)
            account.withdraw(money2)
            //Assert 
            expect(account.getBalance()).toBe(2500)
        })
        it('should put the dates into array', () => {  
            //Act
            account.deposit(money)
            account.deposit(money1)
            account.withdraw(money2)
            //Assert
            expect(account.getDateArray()).toEqual(['10/01/2012', '13/01/2012', '14/01/2012'])
        })

    })
    
 })