import getPokemonData from "api/getPokemonData";
import {useEffect, useState} from "react";

export default function usePokemonData(poke){
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getPokemonData(poke)
        .then(resp =>{
            setPokemonData(resp);
            setLoading(false);
        });
    },[setPokemonData, poke]);
            
    return {pokemonData, loading};
};
