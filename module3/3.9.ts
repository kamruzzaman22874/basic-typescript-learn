{
    // abstraction : 1. interface 2.abstract
    // idea 
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // class Car implements Vehicle1 {
    //     startEngine(): void {
    //         console.log(`I am starting the car`)
    //     }
    //     stopEngine(): void {
    //         console.log(`I am stopping the car`)
    //     }
    //     move(): void {
    //         console.log(`I am moving the car`)
    //     }
    // }

    // const newCar = new Car()
    // newCar.startEngine()


    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void
    }


    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car`)
        }
        stopEngine(): void {
            console.log(`I am stopping the car`)
        }
        move(): void {
            console.log(`I am moving the car`)
        }
    }
    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
    //
}