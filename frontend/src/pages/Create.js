import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    // Utilizo state para salvar o valor do meu form e fazer uma requisição
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = {name, email};

        //send a post request to express server
        //goHome
    }

    return ( 
        <div className="create">
            <h1>Create New User</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>E-mail: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                { !isPending && <button type="submit">Update User</button> }
                { isPending && <button type="submit" key='creating-btn' disabled>Creating...</button> }
            </form>
            
        </div>
     );
}
 
export default Create;