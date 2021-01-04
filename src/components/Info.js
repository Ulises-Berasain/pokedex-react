import React from "react";
import "styled-components/Info.css";
import pokedexLogo from "img/pokedex-logo.png";
import rotomdex from "img/rotom-dex.png";

export default function Info(){
    return (
        <div className="container-pokedex-info">
            <img src={pokedexLogo} alt="Pokedex Logo" className="pokedex-logo"/>
            <img src={rotomdex} alt="Rotomdex" className="rotomdex1"/>
            <img src={rotomdex} alt="Rotomdex" className="rotomdex2"/>
            <h1 className="pokedex-title">Pokedex</h1>
            <p className="pokedex-paragraph">
                The Pokédex is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. 
                The name Pokédex is a neologism including "Pokémon" and "index". 
                The Japanese name is simply "Pokémon Encyclopedia", and it can feature every Pokémon on it, depending on the Pokédex.
                <ul className="pokedex-list"><strong>The Pokédex can:</strong>
                    <li>Identify Pokémon</li>
                    <li>Scan Poké Balls (Sinnoh, anime)</li>
                    <li>Identify battle moves</li>
                    <li>Show where to capture Pokémon (in-game)</li>
                </ul>
            </p>
        </div>
    );
};
