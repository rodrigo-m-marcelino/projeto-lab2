import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../components/useFetch";

const UserUpdate = () => {
    const { id } = useParams(); // Grab parameters

    // useFetch para recuperar os dados detalhados de cada do user
    const endpoint = `http://localhost:5000/users/${id}`
    const { data, isPending, error } = useFetch(endpoint);
   
    // Definindo os campos 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // Recupera os campos atuais
    useEffect(() => {
        if(!isPending){
            setName(data[0].name);
            setEmail(data[0].email);
        }
    }, [data, isPending])

    // Quando concluir o PUT, vai chamar a função para voltar para a HOME
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    
    // Quando pressionar este botão, chamaremos essa função para fazer a requisição PUT
    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = { name, email, id};
       
        //send a post request to express server
        //goHome
        
            fetch(endpoint, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(usuario)
            })
            .then(() => {
                console.log('User atualizado')
                console.log(JSON.stringify(usuario))
                goHome();
            })
            .catch(error => {
                console.error('Erro ao atualizar usuário:', error);
            });
        
        
    }

    return ( 
        <div className="create">
            {error &&  <div>{ error }</div> }
            {isPending && <div className="loading"><h2>Loading...</h2></div>}
            {data && 
                <div>
                    <h1>Update User - {id} </h1>
                    <form onSubmit={handleSubmit}>
                        <label>Nome: {data.name }</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <label>E-mail: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        { !isPending && <button type="submit" >Update User</button> }
                        { isPending && <button type="submit" key='creating-btn' disabled>Updating...</button> }
                    </form>
                </div>
            }
        </div>
     );
}
 
export default UserUpdate;