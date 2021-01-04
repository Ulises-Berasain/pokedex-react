import './App.css';
import usePokemons from "hooks/usePokemons";
import PokemonCard from "components/PokemonCard";
import Header from "components/Header";
import SearchInput from "components/SearchInput";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PokemonInfo from "components/PokemonInfo";
import TypesTable from "components/TypesTable";
import Info from "components/Info";
import Contact from "components/Contact";
import ButtonNextPrev from "components/ButtonNextPrev";

function App() {
  const {pokemons, setPage} = usePokemons();

  const handlePrevPage = ()=>{
      return setPage(prevPage => prevPage -1)
  };
    
  const handleNextPage = ()=>{
      return setPage(prevPage => prevPage +1)
  };

  return (
    <React.Fragment>
      <Router>

        <Header/>
        <SearchInput/>

        <Switch>

          <Route path="/" exact>
            <ButtonNextPrev onClickPrev={handlePrevPage} onClickNext={handleNextPage}/>
            <div className="containter-pokemon-card">
              <PokemonCard pokemon={pokemons}/>
            </div>
            <ButtonNextPrev onClickPrev={handlePrevPage} onClickNext={handleNextPage}/>
          </Route>

          <Route path="/pokemon/types" exact>
            <TypesTable/>
          </Route>

          <Route path="/pokemon/info" exact>
            <Info/>
          </Route>

          <Route path="/pokemon/contact" exact>
            <Contact/>
          </Route>

          <Route path="/pokemon/:pokemon" exact>
            <PokemonInfo/>
          </Route>

        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
