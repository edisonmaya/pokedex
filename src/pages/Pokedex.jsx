import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PokemonList from "../components/pokedex/PokemonList"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState([])
  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState("")
  const trainerName = useSelector((store) => store.trainerName)
  const pokemonsByName = pokemons.filter((pokemon)=>pokemon.name.includes(pokemonName))
  console.log(pokemonsByName);
  useEffect(()=>{
    if(currentType==="")
    {
    axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(({data})=>setPokemons(data.results))
    .catch((err)=>console.log(err))
  }},[currentType])
  useEffect(()=>{
    axios
    .get("https://pokeapi.co/api/v2/type")
    .then(({data})=>setTypes(data.results))
    .catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    if(currentType!=="")
    {
      axios
      .get(`https://pokeapi.co/api/v2/type/${currentType}`)
      .then(({data})=>{setPokemons(data.pokemon.map((pokemon)=> pokemon.pokemon))})
      .catch((err)=>console.log(err))
    }

  },[currentType])
  const handleSubmit = (e)=>{
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())
  }
  const handleChangeType = (e)=>{
      setCurrentType(e.target.value)
  }
  return (
    <main className=" grid place-items-center min-h-screen">
      <header className=" flex flex-col w-full h-[25vh] ">
        <div className=" bg-[#DD1A1A] h-[60%] flex justify-center ">
          <div className="flex justify-between w-[80%] h-full relative ">
            <img className="flex z-10 h-[5vh] sm:h-[8vh] md:h-[12vh] lg:h-[13vh] absolute left-0 -bottom-2 sm:-bottom-3 transition-all" src="/pokedex.png" alt="" />
            <img className="flex z-10 h-[8vh] sm:h-[10vh] md:h-[12vh] lg:h-[15vh] absolute -bottom-[6vh] sm:-bottom-[7vh] md:-bottom-[8vh] lg:-bottom-[10vh] -right-0 transition-all" src="/pokeFooter.png" alt="" />
          </div>
        </div>
        <div className="bg-[#0C0C0C] h-[20%]"></div>
      </header>
      <section className=" flex flex-col w-[80%] items-center gap-6 min-h-screen ">
        <div className="flex flex-wrap w-full justify-start items-start text-lg sm:text-xl md:text-2xl py-4  ">
          <span className="text-[#FE1936] font-bold ">Welcome {trainerName}, </span>
        <p className="text-justify"> here you can find your favorite pokemon.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-2">
          <div className="flex flex-1  shadow-[0px_3px_6px_rgba(0,0,0,0.15)]">
            <input name="pokemonName" className="flex-1 h-12 sm:h-16 px-1 sm:px-5 outline-none" placeholder="Pokemon Name" type="text" />
            <button className="bg-[#D93F3F] hover:bg-[#D93F3F90] transition-all w-[30%] sm:p-2 text-white hover:text-[#D93F3F]" type="submit">Search</button>
          </div>
          <select onChange={handleChangeType} name="" id="" className="flex-1 shadow-[0px_3px_6px_rgba(0,0,0,0.15)] capitalize outline-none">
            <option className="" value="">All pokemons</option>
            {
              types.map((type)=><option value={type.name} key={type.url}>{type.name}</option>)
            }
          </select>
        </form>

      <PokemonList pokemons={pokemonsByName}/>
      </section>

    </main>

  )
}
export default Pokedex