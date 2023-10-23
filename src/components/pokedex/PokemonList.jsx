import PokemonCard from "./PokemonCard"


const PokemonList = ({pokemons}) => {
  return (
    <section>
        {
            pokemons.map((pokemon)=> 
            <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}>

            </PokemonCard>
            )
        }
    </section>
  )
}
export default PokemonList