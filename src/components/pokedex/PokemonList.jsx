import PokemonCard from "./PokemonCard"


const PokemonList = ({pokemons}) => {
  return (
    <section className=" grid gap-3 grid- grid-cols-[repeat(auto-fit,_minmax(255px,_1fr))] justify-center sm:min-w-[240px] min-w-min max-w-full mx-auto mt-12">
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