{
    // 
    // generic constraint with keyof operator 

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle

    const getPropertiesByValue = <T, Q extends keyof T>(obj: T, key: Q) => {
        return obj[key]
    }

    const user = {
        name: "Jamal",
        age: 32,
        address: "Dhk"
    }


    const result = getPropertiesByValue(user, "name")

    // 
}