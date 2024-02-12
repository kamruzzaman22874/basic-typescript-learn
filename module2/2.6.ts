{
    // constraints 

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({
        id: 10,
        name: "jamal",
        email: "jamal@gmail.com",
        address: "Uttara Dhaka",
        contact: "01726222874"
    })
    const student2 = addCourseToStudent({
        id: 5,
        name: "jamal",
        email: "jamal@gmail.com",
        address: "Uttara Dhaka",

    })

}