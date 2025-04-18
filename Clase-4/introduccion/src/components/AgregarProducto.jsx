import React, { useState } from 'react'
import { useCart } from '../context/CartContext';

export const AgregarProducto = () => {

    
    // const context = useContext(CartContext)
    const { agregarProducto, carrito} = useCart()
    

    const handleAgregar = () => {
        const nuevoProducto = {
            id: Math.random().toString(36).substr(2, 5),
            nombre: 'Producto ' + Math.floor(Math.random() * 100)
        };

        agregarProducto(nuevoProducto)
    }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem'}}>
        {/* h3 que muestre la cantidad de elementos en el carrito.length */}
        <h3>{carrito.length}</h3>
        <button onClick={handleAgregar}>Agregar Producto</button>
    </div>
  )
}
