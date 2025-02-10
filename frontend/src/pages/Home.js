import { useState, useEffect } from "react";
import UserList from '../components/UserList';
import useFetch from "../components/useFetch";
const Home = () => {

    const endpoint = 'http://localhost:'

    const { data, isPending, error } = useFetch(endpoint);

    return (  
        <div className="home">
            {error &&  <div>{ error }</div> }
            {isPending && <div className="loading"><h2>Loading...</h2></div>}
            {data && <UserList lista={data} titulo="Home"/> }
        </div>
    );
}
 
export default Home;