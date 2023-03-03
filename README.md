# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
As a account holder
I want to deposit money to my account

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Account | accountStatement@Array    |deposit(@Money)    | @Void   |
|         | [@Money]                  |                   | @Void   |
| Money   | amount @NaN               |                   | @Void   |


As a account holder
I want to withdraw money from my account

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Account | accountStatement@Array    |withdraw(@Money)   | @Void   |
|         | [@Money]                  |                   | @Void   |
| Money   | amount @NaN               |                   | @Void   |


I want to check balance

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Account | accountStatement@Array [@Money]   |getBalance()       | @float  |
| Money   | Amount@NaN,date@String              |                   | @Void   |

As a account holder
I want to deposit and withdraw money into and from my account at **specific dates** and print the table

| Objects | Properties                | Messages          | Outputs |
| ------- | ------------------------- | ----------------- | ------- |
| Account | accountStatement@Array[@Money]     |deposit(@Money)| @Void  |
|         |          | withdraw(@Money)                  | @Void   |
|         |          | getBalance()                  | @Integer  |
| Money   | amount @NaN ,date @ String               |                   | @Void   |
| Table  | balance @[], creditDebit @[],date @[], credit @[], debit @[]|                   | @String   |


Output of the code:

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


