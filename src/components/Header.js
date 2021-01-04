import React from "react";
import pokemonLogo from "img/pokemon-logo.png";
import "styled-components/Header.css";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <Link to="/pokedex-react/" className="pokemon-logo">
                <img src={pokemonLogo} alt="Pokemon Logo" className="pokemon-logo"/>
            </Link>
        </header>
    );
};
