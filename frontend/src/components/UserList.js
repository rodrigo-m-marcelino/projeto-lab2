const UserList = ({lista, titulo, handleUpdate, handleDelete}) => {
    
    return ( 
    <div className="home">
        <h1>{ titulo }</h1>
        { lista.map((user) => (
            <div className="user-preview" key={user.id}>
                <h2>{ user.name }</h2>
                <p>{ user.email }</p>
                <button type="button" onClick={() => handleUpdate(user.id)}>Update</button>
                <button type="button" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
        ))}
    </div>
     );
}
 
export default UserList;