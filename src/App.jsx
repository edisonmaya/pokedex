
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetails from './pages/PokemonDetails'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<PrivateRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />}></Route>
          <Route path='/pokedex/:id' element={<PokemonDetails />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
