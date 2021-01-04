import getPokemons from "api/getPokemons";
import {useEffect,useState} from "react";

const INITIAL_PAGE = 0;

export default function usePokemons(){
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(INITIAL_PAGE);

    useEffect(()=>{
        getPokemons()
        .then(resp =>{
            setPokemons(resp)
        });
    },[setPokemons]);

    useEffect(()=>{
        if(page < 0){
            return setPage(0);
        }
        getPokemons({page})
        .then(resp =>{
            setPokemons(resp)
        });
    }, [page, setPokemons]);

    return {pokemons, setPage, page};
}