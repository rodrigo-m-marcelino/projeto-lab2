import { Link } from "react-router-dom";

const UserList = ({lista, titulo}) => {
    
    const handleDelete = (id) => {
        // chama fetch
    }
    
    return ( 
    <div className="home">
        <h1>{ titulo }</h1>
        { lista.map((user) => (
            <div className="user-preview" key={user.id}>
                    <h2>{ user.name }</h2>
                    <p>{ user.email }</p>
                    <Link to={`/update/${user.id}`}>
                        <button type="button" >Update</button>
                    </Link>
                    <button type="button" onClick={handleDelete}>Delete</button>
            </div>
        ))}
    </div>
     );
}
 
export default UserList;