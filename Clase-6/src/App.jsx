import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PokemonCard } from './components/PokemonCard'
import { Team } from './components/Team'
import { Button } from './components/Button'
import { PokeProvider } from './context/PokemonContext'
import { RandomPokemon } from './components/RandomPokemon'

function App() {
  const [count, setCount] = useState(0)


  return (
    <PokeProvider>
      <PokemonCard/>
      <Team/>
      {/* <RandomPokemon/> */}
    </PokeProvider>
  )
}

export default App
