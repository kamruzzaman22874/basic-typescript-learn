{
    // mapped types 
    const arrOfNumbers = [2, 5, 8, 9]
    const arrOfStrings = arrOfNumbers.map(number => number.toString())
    console.log(arrOfStrings)

    type AreaNumbers = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }
    type AreaString<T> = {
        [key in keyof T]: T[key];
    }


    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50
    }





    //

}