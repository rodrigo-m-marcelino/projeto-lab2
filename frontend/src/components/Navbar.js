import { Link } from 'react-router-dom';

const Navbar = () => {

    return (  
        <nav className="navbar">
            <h1>Projeto - Lab2</h1>
            <div className="links">
                <Link to="/" className={'yesHome'}>Home</Link> 
                <Link to="/create" className={'add'}>Add new user</Link>
            </div>
        </nav>
        

    );
}
 
export default Navbar;