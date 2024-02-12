{
    // function with generics 

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    interface CreateArray { id: number; name: string }
    const res1WithGeneric = createArrayWithGeneric<CreateArray>({ id: 1, name: "Joy" })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    interface CreateArray1 { id: number; name: string }
    const res1WithGenerics = createArrayWithTuple<222, CreateArray1>


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({
        name: "jamal",
        age: 30,
        address: "Uttara Dhaka",
        contact: "01726222874"
    })
}