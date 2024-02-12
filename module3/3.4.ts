{
    // instanceof guard 

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making a sound")
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBurg() {
            console.log("Dog make a Burg")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeCatSoung() {
            console.log("I am making sound like a cat")
        }
    }

    // smart way te kaj korar jonno function er maddome kajta korte pari 

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBurg()
        }
        else if (isCat(animal)) {
            animal.makeCatSoung()
        }
        else {
            animal.makeSound()
        }
    }


    const dog = new Dog("Kutta", "Dog");
    const cat = new Cat("Biral", "Cat");
    getAnimal(cat)

    //

}