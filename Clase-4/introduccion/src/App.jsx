import React, { useState } from 'react'
import './App.css'
import { Button } from './components/Inicio/Button'
import Card from './components/Inicio/Card'
import { TodoList } from './components/TodoList'
import { PokemonList } from './components/PokemonList'

function App() {

  return (
    <>
      {/* <div className='AppContainer'>
      <Button titulo={"Perfil"} color={"red"}/>
      <Button titulo={"Contacto"} color={"blue"}/>
      <Button titulo={"Carrito"}  color={"green"}/>
      </div> */}
      {/* <TodoList/> */}
      <PokemonList />
      {/* <Card/> */}
    </> 
  )
}

export default App
