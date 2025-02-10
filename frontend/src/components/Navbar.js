import { Link } from 'react-router-dom';

const Navbar = () => {

    // Link intercepta o clique no link e atualiza apenas a parte da página que precisa ser alterada sem recarregar o resto

    return (  
        <nav className="navbar">
            <h1>Projeto - Lab2</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add new user</Link>
            </div>

        </nav>
        

    );
}
 
export default Navbar;