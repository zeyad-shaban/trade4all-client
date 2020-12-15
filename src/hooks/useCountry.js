import { useEffect, useState } from "react";

export default function useCountry() {
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    useEffect(() => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ip-api.com/json');
        xhr.onload = function (e) {
            if (this.status === 200) {
                const response = JSON.parse(this.response);
                setCountry(response.country);
                setCity(response.city);
            }
        };
        xhr.send();
    }, []);
    return { country, city };
}