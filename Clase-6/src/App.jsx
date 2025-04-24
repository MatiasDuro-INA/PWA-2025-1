import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PokemonCard } from './components/PokemonCard'
import { Team } from './components/Team'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <PokemonCard/>
     <Button titulo={"Atrapar"}/>
     <Button titulo={"Pasar"}/>
     <Team/>
    </>
  )
}

export default App
