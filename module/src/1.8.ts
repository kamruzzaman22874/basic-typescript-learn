{
    //Object Destructuring 


    const user = {
        id: 123,
        age: 32,
        name: {
            firstName: "jamal",
            lastName: "hossen"
        },
        contactNumber: "01726222",
        address: {
            house: 45,
            road: 32,
            location: "Uttara, Dhaka"
        }
    }


    const { id, name: { firstName } } = user;



    // Array Destructuring


    const myBestFriend = ["sona", "rupa", "hira", "noname", "noyon"]
    const [a, b, bestFriend, ...d] = myBestFriend
}