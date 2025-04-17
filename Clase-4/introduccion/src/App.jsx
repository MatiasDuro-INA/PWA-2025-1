import React, { useState } from 'react'
import './App.css'
import { Button } from './components/Inicio/Button'
import Card from './components/Inicio/Card'
import { TodoList } from './components/TodoList'
import { PokemonList } from './components/PokemonList'
import { AgregarProducto } from './components/AgregarProducto'
import { Carrito } from './components/Carrito'
import { CartProvider } from './context/CartContext'
import { Titulo } from './components/Titulo'
import { Header } from './components/Header'

function App() {


  return (
    <CartProvider>
      {/* <div className='AppContainer'> */}
      {/* <Button titulo={tarea} color={"red"}/> */}
      {/* <Button titulo={"Contacto"} color={"blue"}/>
      <Button titulo={"Carrito"}  color={"green"}/> */}

      {/* </div> */}
      {/* <TodoList/> */}
      {/* <PokemonList /> */}
      {/* <Card/> */}

      <Header />
      <div style={{
        display: "flex",
        width: '80%',
        height: '80%',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
      }}>

        <div >
          <Carrito />
        </div>

        <AgregarProducto />
      </div>
    </CartProvider>
  )
}

export default App
