import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar"
import ResultsList from "../ResultsList";

function SearchDisplay() {

    const [searchValue, setSearchValue] = useState("");
    const [resources, setResources] = useState([]);

    function handleChange(e){
        setSearchValue(e.target.value);
    }

    useEffect( () => {
       
        async function getResources(){
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
            const data = await response.json();
            console.log(data.results);
            setResources([...data.results]);
            console.log(resources);
        }
        getResources();
        
    }, []);

}

export default SearchDisplay;