{
    // Polymorphism

    class Person {
        getSleep() {
            console.log(`As a Human I am sleeping for 8 hours per day`)
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`As a Student I am sleeping for 7 hours per day`)
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`As a Developer I am sleeping for 6 hours per day`)
        }
    }

    const getSleepingHours = (params: Person) => {
        params.getSleep()
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person3)



    class Shape {
        getArea(): number {
            return 0
        }
    }

    class Circle extends Shape {

        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Shape {

        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width
        }
    }


    const shapeArea = (params: Shape) => {
        console.log(params.getArea());
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(20, 30)

    shapeArea(shape2)
    //
}