import PokemonCard from "./PokemonCard"


const PokemonList = ({ pokemons }) => {
  return (
    <section className=" grid gap-3 grid-cols-[repeat(auto-fit,_minmax(255px,_1fr))] justify-center min-w-min max-w-full mx-auto mt-12">
      {
        pokemons.length === 0 ? <h3 className="grid place-items-center h-[50vh] text-center ">If there are no matches, do not forget to select ALL Pokemons</h3> :
          pokemons.map((pokemon) =>
            <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}>
            </PokemonCard>
          )
      }

    </section>
  )
}
export default PokemonList