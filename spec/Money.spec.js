import Money from "../src/Money.js"

describe('Money amount test', () => { 
    it('amount check', () => { 
        const money = new Money(1000, '10/01/2012')
        const money1 = new Money(2000, '13/01/2012')
        const money2 = new Money(500, '14/01/2012')

        const amount = money.getAmount()
        // console.log(money.getDate())
        expect(amount).toBe(1000)
     })
 })