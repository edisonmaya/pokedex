
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
        <Route path='/pokedex/:id' element={<PokemonDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
