import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bgByType} from "../constants/pokemon"

const PokemonDetails = () => {

  const [pokemon, setPokemon] = useState(null)
  const { pokemonId } = useParams()

  const getPercentStat = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1);
    return `${percentStat}%`
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <article className=" font-['Roboto'] grid place-items-center min-h-screen gap-16 capitalize text-[#302F2F] ">

        <section className=" flex flex-col w-full h-[25vh] ">
          <div className=" bg-[#DD1A1A] h-[60%] flex justify-center ">
            <div className="flex justify-between w-[80%] h-full relative ">
              <img className="flex z-10 h-[5vh] sm:h-[8vh] md:h-[12vh] lg:h-[13vh] absolute left-0 -bottom-2 sm:-bottom-3 transition-all" src="/pokedex.png" alt="" />
              <img className="flex z-10 h-[8vh] sm:h-[10vh] md:h-[12vh] lg:h-[15vh] absolute -bottom-[6vh] sm:-bottom-[7vh] md:-bottom-[8vh] lg:-bottom-[10vh] -right-0 transition-all" src="/pokeFooter.png" alt="" />
            </div>
          </div>
          <div className="bg-[#0C0C0C] h-[20%]"></div>
        </section>

        <section className=" flex flex-col w-[80%] items-center gap-8 min-h-screen  shadow-[0px_2px_16px_rgba(0,0,0,0.15)] rounded pb-9 mb-9">
          <header className=" flex flex-col w-full   ">
            <div className={`flex justify-between w-full h-[25vh] relative  p-1 ${ bgByType[pokemon?.types[0].type.name]}`}>
              <img className="flex z-10 h-[40vh] bottom-1 absolute  inset-x-0 mx-auto  transition-all" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
          </header>

          <div className="grid place-items-center border shadow-[0px_2px_16px_rgba(0,0,0,0.15)] text-[#416460] text-5xl p-2 rounded-md">
            <h3 >#{pokemon?.id}</h3>
          </div>
          <div className="grid place-items-center relative w-[80%] border-b-2 border-[#9F9F9F] transition-all">
            <h2 className="grid place-items-center w-[30vh] md:w-[35vh] text-[#416460] bg-white text-4xl lg:text-5xl  absolute inset-x-0 mx-auto">{pokemon?.name}</h2>
          </div>


          <article className="w-[80%]">
            <section className="grid place-items-center gap-8 md:grid-cols-2 md:text-2xl ">
              <article className="grid place-items-center gap-8">

                <h3 className="  text-center ">Types</h3>
                <ul className="flex md:gap-2 justify-between " >
                  {
                    pokemon?.types.map((type) =>
                      <li key={type.type.url} >
                        <div className={`text-center border-2 px-3 py-2 rounded-md ${ bgByType[type?.type.name]}`}>
                          {type.type.name}
                        </div>
                      </li>)
                  }
                </ul>
              </article>
              <article className="grid place-items-center gap-8">

                <h3 className="  text-center">Abilities</h3>
                <ul className="flex flex-wrap sm:flex-nowrap md:gap-2 justify-center" >
                  {
                    pokemon?.abilities.map((abilitie) =>
                      <li key={abilitie.ability.url} >
                        <div className="text-center border-2 px-3 py-2 rounded-md">
                          {abilitie.ability.name}
                        </div>
                      </li>)
                  }
                </ul>
              </article>
            </section>


            <h3 className="text-2xl my-9">Stats</h3>
            <ul>
              {
                pokemon?.stats.map((stat) =>
                  <li key={stat.stat.name} >
                    <div className="flex justify-between">
                      <h5>{stat.stat.name}</h5>
                      <span>{stat.base_stat}/255</span>
                    </div>
                    {/*barra total*/}
                    <div className="bg-[#F6F6F6] h-6 rounded">
                      {/*progreso en la barra*/}
                      <div style={{ width: getPercentStat(stat.base_stat) }}
                        className={"bg-[linear-gradient(90deg,_#FCD676_0%,_#E6901E_100%)] h-full rounded-md"}></div>
                    </div>
                  </li>)
              }
            </ul>
          </article>
        </section>
      </article>
    </main>
  )
}
export default PokemonDetails