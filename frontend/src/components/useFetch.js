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
        // busca no servidor Express via fetch
        // setUsers = res.data
        // se voltar sucesso => setIsPending = false setError = false
        // se voltar erro => setIsPending = false setError = false
        setTimeout(() => {
            //fetch(servidor)
            //then(res) - recebe a resposta da requisão fetch
                // !res.ok -> throw Error
            //then(data) - recebe os dados que foram convertidos no primeiro hen
            //catch((e) => {}) - captura o erro lançado no primeiro then
            
        }, 1000)
    }, [url]);
   
    return {data, isPending, error };
   
}
 
export default useFetch;