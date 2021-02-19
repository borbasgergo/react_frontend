
interface Options {
    url: string,
    method: string,
    body?: string
}

export const fetchDB = (options: Options, jwt: string) => {

    const url = options.url

    const opt = {
        method: options.method,
        body: options.body,
        headers: {
            "Authorization": "Bearer " + jwt,
            "Content-Type": "application/json" 
        }
    }

    return fetch(url, opt)
}