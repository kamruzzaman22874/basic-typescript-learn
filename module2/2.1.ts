{
    // type assertion 
    // let anything: any;
    // anything = 222;
    // (anything as number)


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;
    console.log(result)

}