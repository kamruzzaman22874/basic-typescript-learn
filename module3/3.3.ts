{
    // type guard 

    // check typeof operator 

    type Add = string | number;
    const add = (params1: Add, params2: Add): Add => {
        if (typeof params1 === "number" && typeof params2 === "number") {
            return params1 + params2;
        }
        else {
            return params1.toString() + params2.toString();
        }
    }

    const result = add(2, 3)
    const result2 = add("3", "5")
    console.log(result2)
    console.log(result)

    // in guard 
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`${user.name} is normal user`);
        }
    }


    const normalUser: NormalUser = {
        name: "Mr. Normal Khan"
    }
    const adminUser: AdminUser = {
        name: "Mr. Admin Khan",
        role: "admin"
    }
    getUser(adminUser)

}