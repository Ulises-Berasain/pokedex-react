import React, {useState} from "react";
import {useHistory, NavLink} from "react-router-dom";
import usePokemons from "hooks/usePokemons";
import "styled-components/SearchInput.css"

export default function SearchInput(){
    const [searchPokemon, setSearchPokemon] = useState("");
    const {pokemons} = usePokemons();
    const history = useHistory();

    const handleOnChange = (e)=>{
        return setSearchPokemon(e.target.value);
    };

    const handleOnClick = ()=>{
        return history.replace(`/pokemon/${searchPokemon.toLocaleLowerCase()}`), setSearchPokemon("");
    }

    return(
        <React.Fragment>
            <div className="container-input">
                <input onChange={handleOnChange} value={searchPokemon} className="input-search" placeholder={`Total Pokemons: ${pokemons.count}`}/>
                <button onClick={handleOnClick} className="button-search" >Search Pokemon</button>

                <div className="btn-group">
                    <NavLink to="/" className="btn btn-danger" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/pokemon/types" className="btn btn-danger" activeClassName="active" exact>Types Table</NavLink>
                    <NavLink to="/pokemon/info" className="btn btn-danger" activeClassName="active" exact>Info</NavLink>
                    <NavLink to="/pokemon/contact" className="btn btn-danger" activeClassName="active" exact>Contact</NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};
