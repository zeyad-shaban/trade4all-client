import { useEffect, useState } from "react";

export default function useApi(apiFunc) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await apiFunc();
                setData(data);
            } catch (err) {
                setErr(err);
            }
            setLoading(false);
        })();
    }, [apiFunc]);

    return { data, setData, loading, err };
}