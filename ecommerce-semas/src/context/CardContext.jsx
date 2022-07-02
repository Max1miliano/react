import { useEffect } from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export const CardProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    // const [totalCantidad, setTotalCantidad] = useState(0)

    const [totalToPay, setTotalToPay] = useState(0)

    useEffect(() => {
        getCantidadCarrito()
        // eslint-disable-next-line
        updateTotalToPay()
        // eslint-disable-next-line
    }, [carrito]);

    const agregarItem = (productToAdd) => {
        if (!estaEnElCarrito(productToAdd.id)) {
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

    const updateTotalToPay = () => {
        let total = 0
        carrito.forEach(prod => {
            total += prod.cantidad * prod.precio
        })
        
        setTotalToPay(total)
    }

    return (
        <CartContext.Provider value={{ carrito, agregarItem, totalToPay, sacarItem, estaEnElCarrito, getCantidadCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

export const useCart = () => {
    return useContext(CartContext)
}