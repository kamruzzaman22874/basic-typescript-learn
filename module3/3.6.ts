{
    // getter and setter
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // get modifier 
        get balance() {
            return this._balance
        }

        //   public  getBalance() {
        //         return this._balance;
        //     }
    }

    const newAccount = new BankAccount(555, "Mr. Smith", 200)

    newAccount.deposit = 400;
    // newAccount.addDeposit(500)
    // const result = newAccount.getBalance()

    const myBalance = newAccount.balance
    console.log(myBalance)
    // 
}