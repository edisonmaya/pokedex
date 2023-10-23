const Pokedex = () => {
  return (
    <main className=" grid place-items-center min-h-screen">
      <header className=" flex flex-col w-full h-[18vh] ">
        <div className=" bg-[#DD1A1A] h-[60%] flex justify-center ">
          <div className="flex justify-between w-[80%] h-full relative ">
          <img className="flex z-10 h-[5vh] sm:h-[8vh] md:h-[12vh] lg:h-[13vh]  absolute left-0 -bottom-2 sm:-bottom-3" src="/pokedex.png" alt="" />
          <img className="flex z-10 h-[8vh] sm:h-[10vh] md:h-[12vh] lg:h-[13vh] absolute -bottom-[9vh] sm:-bottom-[10vh] -right-0 " src="/pokeFooter.png" alt="" />
          </div>
        </div>
      <div className="bg-[#0C0C0C] h-[40%]"></div>
      </header>
      <section className="min-h-screen">

      </section>

    </main>

  )
}
export default Pokedex