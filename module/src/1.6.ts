{
    // Learnig function 

    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    add(5, 3)

    // arrow function 

    const addArrow = (num1: number, num2: number): number => num1 + num2;

    // object => function => method 

    const richUser = {
        name: "Joy",
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is ${this.balance + balance}`;
        }
    }


    const newArray: number[] = [5, 6, 8, 10]

    newArray.map((bal: number): number => bal * bal)
}