import { useEffect, useState } from "react";

const localCahe = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        fetchData()
    }, [url]);

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const fetchData = async () => {

        if (localCahe[url]) {
            console.log("Usando cahe");
            setState({
                data: localCahe[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoading();

        const res = await fetch(url)

        // Sleep (1.5s)    
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!res.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            });
            return;
        }

        const data = await res.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        //Manejo de cache
        localCahe[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
};