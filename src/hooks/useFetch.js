import { useState, useEffect } from "react";


// 4- custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null)

    const [id, setId] = useState(null)


    const httpConfig = (data, method) => {
        if (method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }

        if (method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            })

            setMethod(method)

            const id = data.id
            setId(id)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading
            setLoading(true)
            try {
                const res = await fetch(url)

                const json = await res.json()
    
                setData(json)
            } catch (error) {
                console.log(error.message)

                setError("houve algum erro ao carregar os dados!")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5- refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                const json = await res.json();
    
                setCallFetch(json)
            }

            if(method === "DELETE"){
                let fetchOptions = [`${url}/${id}`, config]

                const res = await fetch(...fetchOptions)
                const json = await res.json();
    
                setCallFetch(json)
            }
        };
        httpRequest()
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
}