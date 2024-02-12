{
    // class type 

    class Studet {
        // using parameter type 

        constructor(public name: string, public age: number, public address: string) { }

        getSleep(numberOfHours: number) {
            console.log(`Mr. ${this.name} sleeping ${numberOfHours} hours`);
        }
    }

    const student1 = new Studet("Jamal", 20, "Dhk")
    student1.getSleep(4)


}