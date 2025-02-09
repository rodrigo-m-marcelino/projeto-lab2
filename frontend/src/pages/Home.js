import { useState} from "react";

const Home = () => {

    const [users, setUsers] = useState(
       [ {name: 'Rodrigo', email: ' rodrigo@casasdoventos.com.br', phone: '+55 11 974113775', id: 1},
         
       ]
    );

    return (  
        <div className="home">
            <h1>Home</h1>

            { users.map((user) => (
                <div className="user-preview" key={user.id}>
                    <h2>{ user.name }</h2>
                    <p>{ user.email }</p>
                    
                </div>
            ))}

        </div>
    );
}
 
export default Home;