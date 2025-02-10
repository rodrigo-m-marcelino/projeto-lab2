import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(
        [ {name: 'Rodrigo', email: ' rodrigo@casasdoventos.com.br', phone: '+55 11 974113775', id: 1},
         {name: 'Rogério', email: ' rogerio@casasdoventos.com.br', phone: '+55 11 974113775', id: 2}
        ]
     );
     const [isPending, setIsPending] = useState(true);
     const [error, setError] = useState(true);

    useEffect(() => {

        const abortCont = new AbortController(); //stop the fetch when a component is unmount

        // busca no servidor Express via fetch
        // setUsers = res.data
        // se voltar sucesso => setIsPending = false setError = false
        // se voltar erro => setIsPending = false setError = false
        setTimeout(() => {
            //fetch(url, { signal: abortCont.signal })
            //then(res) - recebe a resposta da requisão fetch
                // !res.ok -> throw Error
            //then(data) - recebe os dados que foram convertidos no primeiro hen
            //catch((e) => {}) - captura o erro lançado no primeiro then e trata o abortError
            
        }, 1000)
    }, [url]);
   
    /**return () => abortCont.abort() */
    return {data, isPending, error };
   
}
 
export default useFetch;