{
    // generic type 

    type GenericArray<T> = Array<T>


    // const rollNumber: number[] = [1, 2, 3, 4, 5]

    const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5]


    // const human: string[] = ["X", "Y", "Z"]

    const human: GenericArray<string> = ["X", "Y", "Z"]

    // const boolArr: boolean[] = [true, false, true]

    const boolArr: GenericArray<boolean> = [true, false, true]
    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: "Jamal",
            age: 31
        },
        {
            name: "Rakib",
            age: 33
        },
    ]



    // generic tuple 
    type GenericTuple<X, Y> = [X, Y]
    const humans: GenericTuple<string, string> = ["Mr.X", "Mr.Y"]

    const userWithId: GenericTuple<number, { name: string, age: number }> = [123, { name: "Jamal", age: 33 }]

} 