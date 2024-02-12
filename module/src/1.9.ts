{
    // type alias 

    type Student = {
        name: string;
        age: number;
        gender: string;
        address: string;
        contactNo?: string;
    }

    const student1: Student = {
        name: "kamal",
        age: 20,
        gender: "male",
        address: "Nil",
        contactNo: "0172622222"
    }
    const student2: Student = {
        name: "jamal",
        age: 30,
        gender: "male",
        address: "Dhaka",
    }
    const student3 = {
        name: "robin",
        age: 31,
        gender: "male",
        address: "Ctg",
    }

    // function type alias 

    type Add = (num1: string, num2: string) => string;

    const add: Add = (num1, num2) => num1 + num2;





}