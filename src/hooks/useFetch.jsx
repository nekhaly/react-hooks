import { useEffect, useState } from "react";

export function useFetch(uri) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
            .then((response) => {
                if(response.status === 200) {
                    console.log(response);
                    return response.json()
                }
                throw new Error({ message: response.message });
            })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [uri]);

    return { data, loading, error };
}