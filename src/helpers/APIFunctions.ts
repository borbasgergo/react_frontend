const DOMAIN = "http://localhost:9000"

interface Options {
    url: string,
    method: string
}

export const fetchDB = ({ url, method }: Options, jwt?: string, data?: any) => fetch(
    DOMAIN + url,
    {
        method,
        headers: { 
            "Authorization": `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        },
        body: !["DELETE","GET"].includes(method) ? JSON.stringify(data) : undefined
    }
).then(result => result.json())
