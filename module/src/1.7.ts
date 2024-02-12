{
    // spred operator 

    const oldNumber: number[] = [1, 2, 3, 4, 5]
    const newNumber: number[] = [17, 18, 15, 12, 14]

    oldNumber.push(...newNumber)


    const someNewMembers = {
        firsName: "jamal",
        secondName: "hossen"
    }

    const someOldMembers = {
        rollNumber: 20,
        address: "Dhaka"
    }

    const fullMembers = {
        ...someNewMembers,
        ...someOldMembers
    }


    // rest operator 


    const friends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }
    friends("jamal", "akas", "nodi")




}