import { useEffect, useState } from "react";
import { IUseFetchResult } from "../Interfaces/IFetch";

const useFetch = (url: string, isDataChanged?: number): IUseFetchResult => {
    const [data, setData] = useState<any | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Error fetching cars data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url, isDataChanged]);

    return {data, isPending, error};
}

export default useFetch;