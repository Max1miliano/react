import { useState, createContext } from "react";

const CartContext = createContext()

export const CardProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const [totalCantidad, setTotalCantidad] = useState(0)

    const agregarItem = (productToAdd) => {
    if(!estaEnElCarrito(productToAdd.id)){
    setCarrito([...carrito, productToAdd ])
  }

}

    const sacarItem = (id) => {

    const productoFueraDelCarrito = carrito.filter(prod => prod.id !== id)

    setCarrito(productoFueraDelCarrito)
}

    const estaEnElCarrito = (id) => {
    return carrito.some(prod => prod.id === id)
}

    const getCantidadCarrito = () => {    
    let totalCantidad = 0
    carrito.forEach(prod => {
        totalCantidad += prod.cantidad
    })

    return totalCantidad
}

    return (
        <CartContext.Provider  value={{ carrito, agregarItem, sacarItem , estaEnElCarrito, getCantidadCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext