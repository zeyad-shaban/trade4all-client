import { useEffect, useState } from "react";

export default function useApi({ apiFunc }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await apiFunc();
                setData(data);
            } catch (err) {
                setErr(true);
            }
            setLoading(false);
        })();
    }, []);

    return { data, setData, loading, err };
}