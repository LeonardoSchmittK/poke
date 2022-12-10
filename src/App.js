import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [isLoaded,setIsLoaded] = useState(false);
  const [pokemon,setPokemon] = useState("");
  const [pokemonData,setPokemonData] = useState([])
  const [error,setError] = useState(new Error());

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPokemonData(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error);
          }
        )
    },[pokemon])


  function searchPokemon(v){
    setPokemon(v.target.value)
  }
  
    return (
    <div className="App">
        <input type="text" onKeyUp={searchPokemon}/>
        {
            pokemonData.stats && 

            <div>
                <h1>{pokemonData.name} </h1>
                <h1>HP: {pokemonData.stats[0].base_stat} </h1>
                <h1>Attack: {pokemonData.stats[1].base_stat} </h1>
                <h1>Defense: {pokemonData.stats[2].base_stat} </h1>
                <h1>special-attack: {pokemonData.stats[3].base_stat} </h1>
                <h1>special-defense: {pokemonData.stats[4].base_stat} </h1>
                <h1>Speed: {pokemonData.stats[5].base_stat} </h1> 
                <img src={pokemonData.sprites.front_default}/>
            </div>
        }
    </div>
  );
}

export default App;
