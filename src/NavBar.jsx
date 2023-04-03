
function NavBar({setIndex, pokemonList}) {

  const changePokemon = ((index) =>{
    setIndex(index)
  })

    return (
      <div>
       
        
          {pokemonList.map((pokemon ,index) =>(
            <button key={pokemon.name} onClick={() => changePokemon(index)}>{pokemon.name}</button>
          ))}
      
   </div>
  );
}

export default NavBar;
