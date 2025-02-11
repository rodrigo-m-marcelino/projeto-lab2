import { Link } from "react-router-dom";

const UserList = ({lista, titulo}) => {


    const handleDelete = (id, e) => {
        fetch( `http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            console.log('User deletado')
            console.log(id)
            window.location.reload();   
        })
        .catch(error => {
            console.error('Erro ao deletar usuário:', error);
        });
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
                    <button type="button" onClick={() => {handleDelete(user.id)}}>Delete</button>
            </div>
        ))}
    </div>
     );
}
 
export default UserList;