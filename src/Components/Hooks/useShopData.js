import { useEffect } from "react";
import { useState } from "react";

export default function useShopData() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');

                const result = await response.json();

                setData(result)

            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])



    return [data, loading, error]
}