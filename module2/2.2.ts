{
    // type

    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRoll1 = User1 & { role: string }


    const user1: UserWithRoll1 = {
        name: "Jamal",
        age: 31,
        role: "admin"
    }



    // interface 

    interface User2 {
        name: string;
        age: number;
    }


    interface UserWithRoll2 extends User2 {
        role: string;
    }

    const user2: UserWithRoll2 = {
        name: "Jamal",
        age: 30,
        role: "admin"
    }

    // array ==> object ==> object ==> object ==> function ==> object

    type Roll1 = number[]
    interface Roll2 {
        [index: number]: number
    }
    const rollNumber: Roll2 = [1, 2, 3, 4];
    type Add1 = (num1: number, num2: number) => number;
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add: Add2 = (num1, num2) => num1 + num2;
}
