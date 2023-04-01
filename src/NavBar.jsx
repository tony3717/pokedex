
import React from "react";

function NavBar(props) {
  return (
    <div style={{ position: "fixed", top: "0", width: "100%", backgroundColor: "coral" }}>


      {props.pokemonIndex > 0 ? (
        <button onClick={props.handleClickBack}>back</button>
      ) : null}
      {props.pokemonIndex < 4 ? (
        <button onClick={props.handleClickNext}>next</button>
      ) : null}

   </div>
  );
}

export default NavBar;












/*function NavBar ({pokemonIndex, setPokemonIndex,pokemonList}) {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex+1)
  }
  const handleClickBack =() => {
    setPokemonIndex(pokemonIndex-1)
  }

return (
  <div>
         { (pokemonIndex > 0) ? ( <button onClick={handleClickBack}>back</button>):""}
        {(pokemonIndex < pokemonList.length - 1) ? (  <button onClick={handleClickNext}>next</button>) :""}
</div>
)

} 

export default NavBar*/