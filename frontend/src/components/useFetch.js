import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
     const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController(); //stop the fetch when a component is unmount

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                // recebe a resposta da requisão fetch
                .then(res => { 
                    if (!res.ok) {
                        throw Error('Fetch falhou');
                    }
                    return res.json(); // res is not the actual data -> return another promise
                })
                // recebe os dados que foram convertidos no primeiro then
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                    console.log(data)
                })
                .catch(err => {
                    if (error.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else{
                        setIsPending(false)
                        setError(err.message)
                    }
                   
                })
            
        }, 1000)
        return () => abortCont.abort();

    }, [url]);
   
    /* */
    return {data, isPending, error };
   
}
 
export default useFetch;