{
    // ternery operator 

    const age: number = 15;
    // if (age == 15) {
    //     console.log("adult")
    // }
    // else {
    //     console.log("minor")
    // }

    const isAdult = age < 18 ? "adult" : "minor"
    // console.log({ isAdult })


    // nullish coalation 

    const isAuthentication = "";

    const result1 = isAuthentication ?? "Guest";
    const result2 = isAuthentication ? isAuthentication : "Guest"
    // console.log({ result1 })
    // console.log({ result2 })


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            permanentAddress: string;
            presentAddress?: string;
        }
    }

    const user: User = {
        name: "Jamal",
        address: {
            city: "dhk",
            road: "456",
            permanentAddress: "dhaka"
        }
    }

    const user1 = user?.address?.presentAddress ?? "No Present Address"
    console.log(user1)

}