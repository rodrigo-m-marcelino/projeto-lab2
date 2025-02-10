import { useState, useEffect } from "react";
import UserList from '../components/UserList';
import useFetch from "../components/useFetch";
const Home = () => {

    const endpoint = 'http://localhost:'

    const { data, isPending, error } = useFetch(endpoint);

    const handleUpdate = (id) => {
        // chama fetch
    }

    const handleDelete = (id) => {
        // chama fetch
    }

    return (  
        <div className="home">
            {error &&  <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {data && <UserList lista={data} titulo="Home" handleDelete={handleDelete} handleUpdate={handleUpdate}/> }
        </div>
    );
}
 
export default Home;