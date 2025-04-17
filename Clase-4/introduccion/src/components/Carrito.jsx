import React from 'react'
import { useCart } from '../context/CartContext'

export const Carrito = () => {

    const { carrito } = useCart()

    console.log("Carrito: ", carrito);

    // Agregar boton que elimine del carrito
    // setTareas(carrito.filter((cart) => cart.id !== prod.id))


  return (
    <div style={{background: '#eee', padding: '1rem', marginBottom: '1rem', color: "black"}}>
        <h3>Carrito</h3>
        <p>Total de productos: </p>
        <ul>
            {
                carrito.map((prod) => {
                    console.log("producto: ", prod);
                    return (
                        <div style={{display: 'flex', justifyContent: 'center', gap:'2rem', alignItems: 'center'}}>
                    <li style={{color: 'black'}} key={prod.id}>{prod.nombre}</li>
                    <button >x</button>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
}
