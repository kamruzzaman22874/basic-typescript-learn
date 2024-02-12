{
    // access modifiers
    class BankAccount {
        readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    const newAccount = new BankAccount(555, "Mr. Smith", 500)
    newAccount.addDeposit(500)
    const result = newAccount.getBalance()
    console.log(result)
    // 
}