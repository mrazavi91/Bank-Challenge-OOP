class Money{
    #amount=0;
    #date;
    #dateArray;
    constructor(amount, date, dateArray=[]) {
        this.#amount = amount
        this.#date = date
        this.#dateArray = dateArray;
    };

    getAmount() {
        return this.#amount
    };
    getDate() {
        return this.#date
    }
}

export default Money