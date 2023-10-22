const Home = () => {
  return (
    <main className="overflow-hidden font-[Inter] flex flex-col justify-between items-center  min-h-screen ">
        <section className="flex flex-col p-10 lg:px-0 h-[80vh] max-w-2xl gap-16 sm:gap-12 lg:gap-16 justify-center items-center ">
            <img src="/pokedex.png" alt="" />
            <div className=" grid place-items-center gap-4">
                <div className="text-[#FE1936] text-3xl sm:text-4xl lg:text-5xl font-bold break-words">¡Hi trainer!</div>
                <div className="text-[#302F2F] sm:text-2xl">To start, give me your name</div>
            </div>
            <div className="flex w-full">
                <input className="flex-1 h-12 sm:h-16  border border-black" type="text" />
                <button className="bg-[#D93F3F] w-[30%] text-white" type="submit">Comenzar</button>
            </div>
        </section>
        <footer className=" flex flex-col w-full h-[18vh] lg:h-[20vh]">
            <div className="bg-[#DD1A1A] h-[60%] relative">
                <img  className="z-10 w-14 md:w-20 xl:w-32 absolute -bottom-6 sm:-bottom-10 lg:-bottom-12 xl:-bottom-14 inset-x-0 mx-auto"  src="/pokeFooter.png" alt="" />
            </div>
            <div className="bg-[#0C0C0C] h-[40%]"></div>
        </footer>
    </main>
  )
}
export default Home