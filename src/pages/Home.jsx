import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        dispatch(setTrainerName (e.target.trainerName.value)) 
        navigate("/pokedex")
    }
    return (
    <main className="overflow-hidden font-[Inter] flex flex-col justify-between items-center  min-h-screen  ">
        <section className="flex flex-col p-2 lg:px-0 h-[80vh] max-w-2xl gap-16 sm:gap-12 lg:gap-16 justify-center items-center ">
            

            <img  src="/pokedex.png" alt="" />
         
            <div className=" grid place-items-center gap-4">
                <div className="text-[#FE1936] text-3xl sm:text-4xl lg:text-5xl font-bold break-words">¡Hi trainer!</div>
                <div className="text-[#302F2F] sm:text-2xl">To start, give me your name</div>
            </div>
            <form onSubmit={handleSubmit} className="flex shadow-[0px_3px_6px_rgba(0,0,0,0.15)]">
                <input name = "trainerName" className="flex-1 h-12 sm:h-16 px-1 sm:px-5 outline-none"  placeholder="Your Name" type="text" />
                <button className="bg-[#D93F3F]  hover:bg-[#D93F3F90]  sm:px-4 text-white hover:text-[#D93F3F] transition-all" type="submit">Comenzar</button>   
            </form>
        </section>
        <footer className=" flex flex-col w-full h-[18vh] ">
            <div className="bg-[#DD1A1A] h-[60%] relative">
                <img  className="z-10 h-[13vh] absolute -bottom-[7vh] inset-x-0 mx-auto"  src="/pokeFooter.png" alt="" />
            </div>
            <div className="bg-[#0C0C0C] h-[40%]"></div>
        </footer>
    </main>
  )
}
export default Home