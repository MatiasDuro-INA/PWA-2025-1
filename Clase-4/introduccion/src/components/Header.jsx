import React from 'react'
import { Titulo } from './Titulo'
import { useCart } from '../context/CartContext'

export const Header = () => {
const { carrito } = useCart()

    // titulo debe recibir el total dentro de carrito
  return (
    <Titulo titulo={carrito.length}/>
  )
}
