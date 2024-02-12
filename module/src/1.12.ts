{
    // nullable type 

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching")
        }
        else {
            console.log("There is no search")
        }
    }

    searchName(null)
}