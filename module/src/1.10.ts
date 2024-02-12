{
    // union type

    // type FrontendDeveloper = "junior developer" | "proDeveloper";
    // type FullstackDeveloper = "frontend developer" | "expertDeveloper"

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: FrontendDeveloper = "junior developer"

    // type User = {
    //     name: string;
    //     age: number;
    //     gender: "male" | "female";
    //     bloodGroup: "B+" | "O+" | "AB+";
    // }
    // const user1: User = {
    //     name: "jamal",
    //     age: 28,
    //     gender: "male",
    //     bloodGroup: "B+"
    // }

    // intersaction type 

    type FrontendDeveloper = {
        skills: string[],
        designation1: "frontendDeveloper",
    }
    type BackendDeveloper = {
        skills: string[],
        designation2: "backendDeveloper"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const user: FullstackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "frontendDeveloper",
        designation2: "backendDeveloper"
    }

}