import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext()

// Hook para usar el contexto de forma mas sencilla
export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {
            // setCarrito([producto])
        // setCarrito(() => [producto])
        setCarrito((prev) => [...prev, producto])

    }

    const eliminarElemento = (id) => {
        setCarrito(carrito.filter((cart) => cart.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{carrito, agregarProducto, eliminarElemento, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}



