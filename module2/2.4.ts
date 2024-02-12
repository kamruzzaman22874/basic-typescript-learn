{
    // generic interface


    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            price: number;
        }
        smartWatch: T;
        bike?: X;
    }


    interface OldDeveloper {
        brand: string;
        model: string;
        display: string;
    }

    const oldDeveloper: Developer<OldDeveloper> = {
        name: "Junior Developer",
        computer: {
            brand: "Asus",
            model: "360 hp",
            price: 35000
        },
        smartWatch: {
            brand: "Apple",
            model: "something",
            display: "OLED"
        }
    }

    interface NewDeveloper {
        brand: string;
        model: string;
        timeCount: boolean;
        timeEnd: boolean;
    }

    interface YamahaBike {
        model: string;
        price: number;
    }

    const newDeveloper: Developer<NewDeveloper, YamahaBike> = {
        name: "Junior Developer",
        computer: {
            brand: "Asus",
            model: "360 hp",
            price: 35000
        },
        smartWatch: {
            brand: "Apple",
            model: "something",
            timeCount: true,
            timeEnd: true
        },
        bike: {
            model: "Yamaha",
            price: 100000
        }

    }
}