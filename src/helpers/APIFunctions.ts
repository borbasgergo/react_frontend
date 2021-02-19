const DOMAIN = "http://localhost:9000"

interface Options {
    url: string,
    method: string
}

const fetchDB = ({ url, method }: Options, jwt: string, data?: any) => fetch(
    DOMAIN + url,
    {
        method,
        headers: { "Authorization": `Bearer ${jwt}`, "Content-Type": "application/json" },
        data: !["DELETE","GET"].includes(method) ? JSON.stringify(data) : undefined
    } as any  
).then(result => result.json())

export const getTodos = (jwt: string) => {
    return fetchDB({url: "/todo", method: "GET"}, jwt)
}

export const deleteTodo = (jwt: string, todoId: number) => {
    return fetchDB({url: `/todo/delete/${todoId}`, method: "DELETE"}, jwt)
}

export const addTodo = (jwt: string, data: any ) => {
    return fetchDB({url: "/todo/add", method: "POST"}, jwt, data)
}

export const findUser = (jwt: string ) => {
    return fetchDB({url: "/user", method:"GET"}, jwt)
}