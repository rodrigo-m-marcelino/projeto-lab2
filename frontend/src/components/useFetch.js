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
                    // Verifica o Content-Type para saber como lidar com a resposta
                    if (res.headers.get('Content-Type')?.includes('application/json')) {
                        return res.json();  // res is not the actual data -> return another promise
                    } else {
                        return res.text(); // Ou outro método, dependendo do tipo de resposta
                    }
                })
                // recebe os dados que foram convertidos no primeiro then
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                    console.log(data)
                })
                .catch(err => {
                    if (err && err.name === 'AbortError') { // Verifica se err existe e se err.name existe
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err?.message || 'Erro desconhecido'); // Usando optional chaining e fallback
                    }
                })
            
        }, 1000)
        return () => abortCont.abort();

    }, [url]);
   
    /* */
    return {data, isPending, error };
   
}
 
export default useFetch;