import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserUpdate = () => {
    const { id } = useParams(); // Grab parameters

    // useFetch para recuperar os dados detalhados de cada do user

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [isPending, setIsPending] = useState(false);
    
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = {name, email};

        //send a post request to express server
        //goHome
    }

    return ( 
        <div className="create">
        <h1>Update User</h1>
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
 
export default UserUpdate;