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

    return (
        <CartContext.Provider value={{carrito, agregarProducto}}>
            {children}
        </CartContext.Provider>
    )
}



