{

    // conditional type 

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Seikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type RichMan<T> = T extends keyof Seikh ? true : false;
    type HasTactor = RichMan<"plane">


    //
}