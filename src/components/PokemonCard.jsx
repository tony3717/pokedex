

function PokemonCard(props) {console.log(props)
  //const pokemon = pokemonList[0];
return (
<figure>
      {props.pokemon.imgSrc!==""?(<img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      ):(
      <p>"???"</p>
      )}

    <figcaption>{props.pokemon.name}</figcaption>
    
    </figure>
)}

export default PokemonCard