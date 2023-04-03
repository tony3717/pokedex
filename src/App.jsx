
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./NavBar";
import { useEffect } from "react";



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "#5FC47C"
    },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "coral"
    },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "#81D6D0"
    },
  {
    
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "#E2F94E"
    },
  {
    name: "mew",
    color: "#AE00FF"
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(pokemonList[0].color);
  const pokemon = pokemonList[index];
  function handlePlusClick() {
    setIndex(index + 1);
    
  }

  function handleMinusClick() {
    setIndex(index - 1);
    

  }

  useEffect(
    () => {
      alert("hello pokemon trainer :) ")
    },
    []
  );


  return (
    <div>
      <NavBar
        color={color}
        index={index}
        setIndex={setIndex}
        pokemonList={pokemonList}
        setColor={setColor}
      />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;