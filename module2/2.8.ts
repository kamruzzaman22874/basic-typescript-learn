{
    // Promise
    // userId: 1, id: 1, title: 'delectus aut autem', completed: false
    type Todo = {
        UserId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data)
        return data;
    }
    getTodo()


    type Something = { something: string };

    // simulate 
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" }
            if (data) {
                resolve(data)
            }
            else {
                reject("Failed to load data!!!!")
            }
        })
    }
    // calling createPromise 

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise()
        return data

    }

    showData()


}