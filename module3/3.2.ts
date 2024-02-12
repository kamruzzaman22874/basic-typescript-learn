// {
//     // oop class

//     class Person {
//         name: string;
//         age: number;
//         address: string;

//         constructor(name: string, age: number, address: string) {
//             this.name = name;
//             this.age = age;
//             this.address = address;
//         }

//         getStudent(getOfNumber: number) {
//             console.log(`Mr.${this.name} and he is sleeping almost ${getOfNumber} hours in the day`);
//         }
//     }


//     class Student extends Person {
//         constructor(name: string, age: number, address: string) {
//             super(name, age, address);
//         }
//     }


//     class Teacher extends Person {
//         designation: string;
//         constructor(name: string, age: number, address: string, designation: string) {
//             super(name, age, address);
//             this.designation = designation;
//         }

//         getTeacherInfo() {
//             console.log(`Mr. ${this.name}  ${this.designation}`);
//         }
//     }


//     const teacher = new Teacher("Rakib", 30, "MHD", "PHD")
//     teacher.getTeacherInfo()

//     const student = new Student("Jamal", 31, "Dhaka");
//     student.getStudent(5)

// }

{
    class Person {
        name: string;
        email: string;
        contactNo: string;

        constructor(name: string, email: string, contactNo: string) {
            this.name = name;
            this.email = email;
            this.contactNo = contactNo;
        }

        getSleep(numberOfHours: number) {
            console.log(`Mr. ${this.name} will sleep for ${numberOfHours} Hours in per day`)
        }
    }


    class Student extends Person {


        constructor(name: string, email: string, contactNo: string) {
            super(name, email, contactNo)
        }

        getSleep(numberOfHours: number) {
            console.log(`Mr. ${this.name} will sleep for ${numberOfHours} Hours in per day`)
        }
    }
    class Teacher extends Person {

        designation: string;

        constructor(name: string, email: string, contactNo: string, designation: string) {
            super(name, email, contactNo)
            this.designation = designation;
        }

        getClass(numberOfHours: number) {
            console.log(`${this.name} will take ${numberOfHours} class in per day`)
        }
    }

    const student = new Student("Jamal", "jamal@gmail.com", "01726222")
    student.getSleep(4)

    const teacher = new Teacher("Mr. teacher", "mr@gmail.com", "01989214721", "Professor")
    teacher.getClass(5)
}