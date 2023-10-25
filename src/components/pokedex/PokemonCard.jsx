import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { bgByType, borderByType } from "../../constants/pokemon"

const PokemonCard = ({pokemonUrl}) => {
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(()=>{
        axios
        .get(pokemonUrl)
        .then(({data})=>setPokemon(data))
        .catch((err)=>console.log(err))
    },[])
    return (
    <Link to={`/pokedex/${pokemon?.id}`} className={`capitalize border-8 rounded-lg ${ borderByType[pokemon?.types[0].type.name]}`}>
        <header className={`${ bgByType[pokemon?.types[0].type.name] } h-[140px] relative`}>

        </header>
            <div className="relative pt-20 text-center">
                <div className="w-full absolute inset-x-0 -top-32 mx-auto">
                <img className="w-[180px] mx-auto" src={pokemon?.sprites.other["official-artwork"].front_default} alt=""></img>
                </div>
                <h3 className="text-2xl font-semibold" >{pokemon?.name}</h3>
                <span className="text-sm " >{pokemon?.types.map((type)=>type.type.name).join(" / ")}</span>
                <h5>Type</h5>
                <div className="border-b-2 border-gray-500 w-[80%] mx-auto py-2"></div>
                <ul className="grid gap-4 grid-cols-2 text-sm p-2">
                    {
                        pokemon?.stats.slice(0,4).map((stat)=>
                        <li className="grid gap-1" key={stat.stat.name}>
                            <h6 className="font-semibold">{stat.stat.name}</h6>
                            <span className="font-bold">{stat.base_stat}</span>
                        </li>)
                    }
                </ul>
            </div>
    </Link>
)
}
export default PokemonCard